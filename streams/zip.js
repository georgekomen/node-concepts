/**
 * This example shows a meaningful use of transform streams
 * It also shows how you can pipe several functionalities e.g.
 * -compression
 * -reporting with events
 * -encryption with crypto module
 */

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
  .pipe(zlib.createGzip())
  .pipe(crypto.createCipher('aes192', 'a_secret'))
  .pipe(progress)
  .pipe(fs.createWriteStream(file+'.zz'))
  .on('finish', () => console.log('done'));