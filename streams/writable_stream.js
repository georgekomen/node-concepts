/**
 * A stream usually has an implementation and the consumption parts
 * 
 * To implement the writable stream you can either use the simpler constructor approach or extend the writable constructor
 * here we have used the constructor approach 
 */


 // example of a echo stream
 const { Writable } = require('stream');
 const outStream = new Writable({
     write(chunk, encoding, callback) {
         console.log(chunk.toString());
         callback();
     }
 });
 process.stdin.pipe(outStream); // consume the stream

 // the above is same as :
 process.stdin.pipe(process.stdout);