import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const thumbnailsDir = path.join(__dirname, '../../public/images/music/thumbnails');

// Files that need to be converted to webp
const filesToConvert = [
  'curry_on_curry_thumbnail.jpg',
  'sam_and_ash_thumbnail.jpg',
  'teammates_of_target_thumbnail.jpg',
  'level_up_theme_song_thumbnail.png',
  'level_up_trailer_thumbnail.png'
];

async function convertToWebP() {
  let convertedCount = 0;

  for (const file of filesToConvert) {
    const inputPath = path.join(thumbnailsDir, file);
    const outputPath = path.join(thumbnailsDir, file.replace(/\.(jpg|png|jpeg)$/i, '.webp'));

    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Skipping ${file} - file not found`);
      continue;
    }

    try {
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(outputPath);

      console.log(`✓ Converted: ${file} → ${path.basename(outputPath)}`);
      convertedCount++;
    } catch (error) {
      console.error(`❌ Error converting ${file}:`, error.message);
    }
  }

  console.log(`\n✅ Done! Converted ${convertedCount} file(s) to WebP.`);
}

convertToWebP().catch(console.error);
