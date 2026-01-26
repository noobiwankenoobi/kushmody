import sharp from 'sharp';

const inputPath = '/home/haze/myprojects/kushmody/public/images/music/thumbnails/get_your_line_in_and_pray_thumbnail.png';
const outputPath = '/home/haze/myprojects/kushmody/public/images/music/thumbnails/get_your_line_in_and_pray_thumbnail.webp';

sharp(inputPath)
  .webp({ quality: 85 })
  .toFile(outputPath)
  .then(() => console.log('✓ Converted get_your_line_in_and_pray_thumbnail.png to .webp'))
  .catch(err => console.error('Error:', err.message));
