// here we push all our data to a stream before piping it to process.stdout
const { Readable } = require('stream'); // require readable stream interface
const inStream = new Readable(); // construct an object from it
inStream.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ'); // push data
inStream.push(null) // signal end of file
inStream.pipe(process.stdout); // consume the stream