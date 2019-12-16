const fs = require('fs');
const crypto = require('crypto');
const zlib = require('zlib');
const file = process.argv[2];

const { Transform } = require('stream');

const progress = new Transform({
    transform(chunk, encoding, callback) {
        process.stdout.write('.');
        callback(null, chunk);
    }
});
// .pipe(progress) is a better implementation of .on('data', () => process.stdout.write('.'))

fs.createReadStream(file)
  .pipe(crypto.createDecipher('aes192', 'a_secret'))
  .pipe(zlib.createGunzip())
  .pipe(progress)
  .pipe(fs.createWriteStream(file+'.zz'))
  .on('finish', () => console.log('done'));