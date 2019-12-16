/**
 * Working with big amounts of data in nodejs means working with streams
 * 
 * Alot of packages have made working with streams a lot more easier
 * 
 * Node js streams gives you the power of composability in your code just like linux pipings
 * 
 * Many of the built in modules in node implement the streaming interface e.g.
 * http, fs, Zlib, Crypto, tcp, child process and process
 */

 /**
  * What is a stream:
  * collection of data that might not be available all at once and don't have to fit in memory
  * It makes it easy to work with large amounts of data or data that is coming from an external source one chunk at a time
  * 
  * example below shows difference serving a big file without and with streams
  */

  // first create the big file
  const fs = require('fs');
  const file = fs.createWriteStream('./big.file');

  for(let i=0; i<=1e6; i++) {
      file.write('Trying to generate such a big file n/');
  }

  file.end();


  /**
   * Types of streams:
   * 1.) Readable - abstraction from a source where data can be read e.g. fs.createReadStream
   * 2.) Writable - fs.createWriteStream
   * 3.) Duplex - both readable and writable e.g. net.Socket
   * 4.) Transform - basically duplex that can be used to modify the data as it is written or read
   * e.g. zlib.createGzip (input is the writable stream path while the output is the readable stream path)
   * transform streams are also refered to as through streams
   * 
   * All streams are event emitters, they all emit events that we can use to write or read from them
   * 
   * Apart from events, we can consume streams using the pipe method e.g. 
   * src.pipe(dst)
   * src has to be a readable stream and dst has to be a writable stream they can both be dublex streams as well
   * if both are duplex, we can actually chain calls e.g. 
   * 
   * a.pipe(b).pipe(c).pipe(d) // b and c have to be duplex
   * 
   * the above like is thesame as:
   * 
   * a.pipe(b);
   * b.pipe(c);
   * c.pipe(d);
   * 
   * It is recommended that you either choose to use pipes or events but avoid mixing them
   * 
   */