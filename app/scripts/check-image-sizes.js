import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import sharp from 'sharp';

// Get current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Path to the images directory
const imagesDir = join(__dirname, '..', '..', 'public', 'images', 'visual', 'highres');

async function getImageWidth(imagePath) {
  try {
    const metadata = await sharp(imagePath).metadata();
    return metadata.width;
  } catch (error) {
    return `Error: ${error.message}`;
  }
}

async function checkAllImages() {
  try {
    const files = fs.readdirSync(imagesDir);

    console.log('Image widths in public/images/visual:\n');

    for (const file of files) {
      const fullPath = join(imagesDir, file);
      const stats = fs.statSync(fullPath);

      if (stats.isFile()) {
        const width = await getImageWidth(fullPath);
        console.log(`${file}: ${width}px`);
      }
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

checkAllImages();