import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Path to the images directory
const imagesDir = join(__dirname, '..', '..', 'public', 'images', 'visual', 'thumbnails');

try {
  const files = fs.readdirSync(imagesDir);

  let renamedCount = 0;

  files.forEach(file => {
    const oldPath = join(imagesDir, file);
    const stats = fs.statSync(oldPath);

    // Only process files (not directories)
    if (stats.isFile()) {
      const ext = path.extname(file);
      const nameWithoutExt = path.basename(file, ext);

      // Add _thumbnail before the extension
      const newFilename = `${nameWithoutExt}_thumbnail${ext}`;
      const newPath = join(imagesDir, newFilename);

      fs.renameSync(oldPath, newPath);
      console.log(`Renamed: ${file} → ${newFilename}`);
      renamedCount++;
    }
  });

  console.log(`\n✅ Done! Renamed ${renamedCount} file(s).`);
} catch (error) {
  console.error('Error:', error.message);
}