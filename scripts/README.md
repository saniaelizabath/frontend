# Media Optimization Scripts

## Prerequisites

Install ffmpeg on your system:

**Windows:**
```bash
# Using chocolatey
choco install ffmpeg

# Or download from: https://ffmpeg.org/download.html
```

**Linux/EC2:**
```bash
sudo apt install ffmpeg -y  # Ubuntu/Debian
sudo yum install ffmpeg -y  # Amazon Linux
```

## Installation

```bash
cd scripts
npm install
```

## Usage

### 1. Compress Videos (Recommended first)

```bash
node compress-videos.js
```

This will:
- Compress all `.mp4` files in `src/assets/videos/`
- Create `-compressed.mp4` versions
- Reduce file size by 50-70% typically
- Maintain good quality (CRF 28)

**Expected results:**
- `ship.mp4` (8.12 MB) → ~2-3 MB
- Total video size: 40-50 MB → 12-15 MB

### 2. Convert Images to WebP

```bash
node optimize-images.js
```

This will:
- Convert all `.jpg`, `.jpeg`, `.png` to `.webp`
- Process directories: backgrounds, aboutus, clientlogo, awlogo
- Reduce file size by 60-80% typically
- Quality: 85 (excellent quality)

**Expected results:**
- `location.png` (1.43 MB) → ~400-500 KB
- Gallery images: 1.5 MB → ~300-400 KB each

### 3. Update Component Imports

After conversion, update imports in components:

**Before:**
```javascript
import backgroundImage from "/backgrounds/ab.jpg";
```

**After:**
```javascript
import backgroundImage from "/backgrounds/ab.webp";
```

## Testing

1. Run the scripts
2. Check the compressed files
3. Test in browser (all modern browsers support WebP)
4. If quality is good, replace original files

## Rollback

Original files are kept! If you need to rollback:
- Videos: Delete `-compressed.mp4` files
- Images: Delete `.webp` files

## Performance Impact

| Asset Type | Before | After | Savings |
|------------|--------|-------|---------|
| Videos | 40-50 MB | 12-15 MB | 70% |
| Images | 5-8 MB | 1-2 MB | 75% |
| **Total** | **45-58 MB** | **13-17 MB** | **~70%** |

**Page Load Time:**
- Before: 5-10 seconds
- After: 1-3 seconds
- **Improvement: 60-70% faster!**
