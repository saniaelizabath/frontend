const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const path = require('path');

const videoDir = path.join(__dirname, '../src/assets/videos');

console.log('🎬 Starting Video Compression...\n');

let totalOriginal = 0;
let totalCompressed = 0;
let filesProcessed = 0;

function compressVideo(inputPath, outputPath) {
    return new Promise((resolve, reject) => {
        const stats = fs.statSync(inputPath);
        const originalSize = stats.size;

        console.log(`Processing: ${path.basename(inputPath)}...`);

        ffmpeg(inputPath)
            .videoCodec('libx264')
            .outputOptions([
                '-crf 28',           // Quality (18-28, lower = better quality)
                '-preset slow',      // Encoding speed (slower = better compression)
                '-movflags +faststart', // Enable streaming
                '-pix_fmt yuv420p'   // Compatibility
            ])
            .on('start', (cmd) => {
                console.log(`  Command: ${cmd}`);
            })
            .on('progress', (progress) => {
                if (progress.percent) {
                    process.stdout.write(`\r  Progress: ${progress.percent.toFixed(1)}%`);
                }
            })
            .on('end', () => {
                const newStats = fs.statSync(outputPath);
                const newSize = newStats.size;

                totalOriginal += originalSize;
                totalCompressed += newSize;
                filesProcessed++;

                const reduction = ((1 - newSize / originalSize) * 100).toFixed(1);
                console.log(`\n  ✓ ${(originalSize / 1024 / 1024).toFixed(2)} MB → ${(newSize / 1024 / 1024).toFixed(2)} MB (${reduction}% smaller)\n`);

                resolve();
            })
            .on('error', (err) => {
                console.error(`\n  ✗ Error: ${err.message}\n`);
                reject(err);
            })
            .save(outputPath);
    });
}

async function main() {
    if (!fs.existsSync(videoDir)) {
        console.error(`❌ Video directory not found: ${videoDir}`);
        return;
    }

    const files = fs.readdirSync(videoDir);
    const videoFiles = files.filter(f => f.endsWith('.mp4') && !f.includes('-compressed'));

    if (videoFiles.length === 0) {
        console.log('⚠️  No videos to compress (or already compressed)');
        return;
    }

    console.log(`Found ${videoFiles.length} videos to compress\n`);

    for (const file of videoFiles) {
        const inputPath = path.join(videoDir, file);
        const outputPath = path.join(videoDir, file.replace('.mp4', '-compressed.mp4'));

        try {
            await compressVideo(inputPath, outputPath);
        } catch (error) {
            console.error(`Failed to compress ${file}`);
        }
    }

    console.log('\n' + '='.repeat(60));
    console.log('📊 SUMMARY');
    console.log('='.repeat(60));
    console.log(`Videos processed: ${filesProcessed}`);
    console.log(`Original size: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Compressed size: ${(totalCompressed / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Total saved: ${((totalOriginal - totalCompressed) / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Average reduction: ${((1 - totalCompressed / totalOriginal) * 100).toFixed(1)}%`);
    console.log('='.repeat(60));
    console.log('\n✅ Video compression complete!');
    console.log('\n📝 Next steps:');
    console.log('1. Test the compressed videos');
    console.log('2. If quality is good, replace original files');
    console.log('3. Delete original files to save space');
}

main().catch(console.error);
