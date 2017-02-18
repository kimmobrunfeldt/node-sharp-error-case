const sharp = require('sharp');
sharp('earth.jpg')
  .resize(7583, 9767)
  .png()
  .toFile('earth.png', (err) => {
    if (err) {
      throw err;
    }
  })