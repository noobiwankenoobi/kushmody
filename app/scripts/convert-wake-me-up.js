import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const highresPath = '/home/haze/myprojects/kushmody/public/images/visual/highres/wake_me_up_for_the_inflight_meal.jpg';
const thumbnailPath = '/home/haze/myprojects/kushmody/public/images/visual/thumbnails/wake_me_up_for_the_inflight_meal_thumbnail.jpg';

const highresOutputPath = '/home/haze/myprojects/kushmody/public/images/visual/highres/wake_me_up_for_the_inflight_meal.webp';
const thumbnailOutputPath = '/home/haze/myprojects/kushmody/public/images/visual/thumbnails/wake_me_up_for_the_inflight_meal_thumbnail.webp';

async function convertImages() {
  try {
    // Convert highres to webp
    if (fs.existsSync(highresPath)) {
      await sharp(highresPath)
        .webp({ quality: 85 })
        .toFile(highresOutputPath);
      console.log('✓ Converted highres to WebP');
    } else {
      console.log('⚠️  Highres file not found');
    }

    // Convert thumbnail to webp and resize to 300px wide
    if (fs.existsSync(thumbnailPath)) {
      await sharp(thumbnailPath)
        .resize(300, null, { // 300px wide, height auto (preserves aspect ratio)
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp({ quality: 85 })
        .toFile(thumbnailOutputPath);
      console.log('✓ Converted thumbnail to WebP and resized to 300px wide');
    } else {
      console.log('⚠️  Thumbnail file not found');
    }

    console.log('\n✅ Done!');
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

convertImages();
