const sharp = require('sharp');
sharp('poster.svg', { density: 300 })
  .limitInputPixels(false)
  .resize(8268, 11811)
  .png()
  .toFile('image.png', (err) => {
    if (err) {
      throw err;
    }
  })