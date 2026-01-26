import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const musicItemsPath = path.join(__dirname, '../data/music-items.json');

// Read the JSON file
const data = JSON.parse(fs.readFileSync(musicItemsPath, 'utf8'));

// Remove dropbox_url from each object
const updatedData = data.map(item => {
  const { dropbox_url, ...rest } = item;
  return rest;
});

// Write back to file with proper formatting
fs.writeFileSync(musicItemsPath, JSON.stringify(updatedData, null, 2), 'utf8');

console.log(`✓ Removed dropbox_url property from ${updatedData.length} items`);
