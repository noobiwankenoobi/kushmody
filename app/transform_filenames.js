import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Path to the images directory
const imagesDir = join(__dirname, '..', 'public', 'images', 'music');

// Function to transform filename
function createFilename(filename) {
  // Get the file extension
  const ext = path.extname(filename);
  // Get the filename without extension
  const nameWithoutExt = path.basename(filename, ext);

  // Transform the name
  const newName = nameWithoutExt
    .toLowerCase()
    .replace(/[\s.,\-]+/g, '_') // Replace spaces, periods, commas, hyphens with underscore
    .replace(/_+/g, '_') // Replace multiple underscores with single underscore
    .replace(/^_|_$/g, ''); // Remove leading/trailing underscores

  return newName + ext;
}

// Read all files in the directory
try {
  const files = fs.readdirSync(imagesDir);

  let renamedCount = 0;

  files.forEach(file => {
    const oldPath = join(imagesDir, file);
    const stats = fs.statSync(oldPath);

    // Only process files (not directories)
    if (stats.isFile()) {
      const newFilename = createFilename(file);
      const newPath = join(imagesDir, newFilename);

      // Only rename if the name is different
      if (file !== newFilename) {
        fs.renameSync(oldPath, newPath);
        console.log(`Renamed: ${file} → ${newFilename}`);
        renamedCount++;
      }
    }
  });

  console.log(`\n✅ Done! Renamed ${renamedCount} file(s).`);
} catch (error) {
  console.error('Error:', error.message);
}