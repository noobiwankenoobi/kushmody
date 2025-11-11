import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Paths to the images directories
const musicImagesDir = join(__dirname, '..', 'public', 'images', 'music');
const visualImagesDir = join(__dirname, '..', 'public', 'images', 'visual');

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

// Function to process a directory
function processDirectory(imagesDir, dirName) {
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
          console.log(`[${dirName}] Renamed: ${file} → ${newFilename}`);
          renamedCount++;
        }
      }
    });

    console.log(`✅ [${dirName}] Done! Renamed ${renamedCount} file(s).\n`);
  } catch (error) {
    console.error(`Error in ${dirName}:`, error.message);
  }
}

// Process both directories
console.log('Processing music images...\n');
processDirectory(musicImagesDir, 'music');

console.log('Processing visual images...\n');
processDirectory(visualImagesDir, 'visual');