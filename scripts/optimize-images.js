const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Directories to process
const imageDirs = [
    '../public/backgrounds',
    '../public/aboutus',
    '../public/clientlogo',
    '../public/awlogo'
];

let totalOriginal = 0;
let totalCompressed = 0;
let filesProcessed = 0;

console.log('🖼️  Starting Image Optimization to WebP...\n');

async function convertToWebP(inputPath, outputPath) {
    try {
        const stats = fs.statSync(inputPath);
        const originalSize = stats.size;

        await sharp(inputPath)
            .webp({ quality: 85, effort: 6 })
            .toFile(outputPath);

        const newStats = fs.statSync(outputPath);
        const newSize = newStats.size;

        totalOriginal += originalSize;
        totalCompressed += newSize;
        filesProcessed++;

        const reduction = ((1 - newSize / originalSize) * 100).toFixed(1);
        console.log(`✓ ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
        console.log(`  ${(originalSize / 1024).toFixed(0)} KB → ${(newSize / 1024).toFixed(0)} KB (${reduction}% smaller)\n`);

        return true;
    } catch (error) {
        console.error(`✗ Failed to convert ${inputPath}:`, error.message);
        return false;
    }
}

async function processDirectory(dir) {
    const fullPath = path.join(__dirname, dir);

    if (!fs.existsSync(fullPath)) {
        console.log(`⚠️  Directory not found: ${dir}`);
        return;
    }

    console.log(`📁 Processing: ${dir}\n`);

    const files = fs.readdirSync(fullPath);

    for (const file of files) {
        // Skip if already WebP
        if (file.endsWith('.webp')) continue;

        // Only process images
        if (file.match(/\.(jpg|jpeg|png)$/i)) {
            const inputPath = path.join(fullPath, file);
            const outputPath = path.join(fullPath, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

            await convertToWebP(inputPath, outputPath);
        }
    }
}

async function main() {
    for (const dir of imageDirs) {
        await processDirectory(dir);
    }

    console.log('\n' + '='.repeat(60));
    console.log('📊 SUMMARY');
    console.log('='.repeat(60));
    console.log(`Files processed: ${filesProcessed}`);
    console.log(`Original size: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Compressed size: ${(totalCompressed / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Total saved: ${((totalOriginal - totalCompressed) / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Average reduction: ${((1 - totalCompressed / totalOriginal) * 100).toFixed(1)}%`);
    console.log('='.repeat(60));
    console.log('\n✅ Image optimization complete!');
    console.log('\n⚠️  IMPORTANT: Update your component imports to use .webp extensions');
}

main().catch(console.error);
