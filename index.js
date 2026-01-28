
import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';

const answers = await inquirer.prompt([
  {
    type: 'input',
    name: 'website',
    message: 'Ingresa la URL de la página web:'
  }
]);
var url = answers.website

fs.writeFile('URL.txt', url, (err) => {
    if (err) throw err;
})

const qrImage = qr.image(url, { type: 'png' });
qrImage.pipe(fs.createWriteStream('qr_img.png'));
console.log('QR generado!');


