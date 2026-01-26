import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const musicItemsPath = path.join(__dirname, '../data/music-items.json');

// Read the JSON file
const data = JSON.parse(fs.readFileSync(musicItemsPath, 'utf8'));

// Find items with youtube link but no youtube_embed
const missingEmbeds = data.filter(item => {
  return item.youtube && item.youtube.trim() !== '' && (!item.youtube_embed || item.youtube_embed.trim() === '');
});

console.log(`Found ${missingEmbeds.length} items with youtube link but no youtube_embed:\n`);

missingEmbeds.forEach(item => {
  console.log(`ID: ${item.id} - "${item.work_title}"`);
  console.log(`  YouTube: ${item.youtube}`);
  console.log('');
});
