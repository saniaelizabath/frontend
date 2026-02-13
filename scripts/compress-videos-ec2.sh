#!/bin/bash

# Video Compression Script for EC2
# This script compresses all videos in the current directory

echo "🎬 Starting Video Compression..."
echo ""

# Array of video files
videos=("ship.mp4" "sailing-ship.mp4" "ship-inside.mp4" "new.mp4" "diving.mp4")

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ FFmpeg is not installed!"
    echo "Install it with:"
    echo "  Amazon Linux: sudo yum install -y ffmpeg"
    echo "  Ubuntu: sudo apt install -y ffmpeg"
    exit 1
fi

# Compress each video
for video in "${videos[@]}"; do
    if [ -f "$video" ]; then
        echo "📹 Compressing: $video"
        
        # Get original size
        original_size=$(du -h "$video" | cut -f1)
        
        # Compress video
        ffmpeg -i "$video" \
            -vcodec libx264 \
            -crf 28 \
            -preset slow \
            -movflags +faststart \
            -pix_fmt yuv420p \
            "${video%.mp4}-compressed.mp4" \
            -y \
            -loglevel error
        
        if [ $? -eq 0 ]; then
            # Get compressed size
            compressed_size=$(du -h "${video%.mp4}-compressed.mp4" | cut -f1)
            echo "  ✓ Original: $original_size → Compressed: $compressed_size"
            echo ""
        else
            echo "  ✗ Failed to compress $video"
            echo ""
        fi
    else
        echo "⚠️  File not found: $video"
        echo ""
    fi
done

echo "============================================"
echo "📊 COMPRESSION SUMMARY"
echo "============================================"
echo ""
echo "Original files:"
ls -lh *.mp4 | grep -v compressed
echo ""
echo "Compressed files:"
ls -lh *-compressed.mp4
echo ""
echo "✅ Compression complete!"
echo ""
echo "Next steps:"
echo "1. Test the compressed videos"
echo "2. If quality is good, replace originals:"
echo "   for f in *-compressed.mp4; do mv \"\$f\" \"\${f/-compressed/}\"; done"
echo "3. Restart your application"
