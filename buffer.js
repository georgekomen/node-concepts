/*
  - is a global object used to work with binary streams of data
  A buffer is basically a chunk of memory allocated outside of the v8 heap and we can put some data in that memory and that 
  data can be interpreted in one of many ways depending on the lenght of the character for example
  - thats why when there is a buffer, there is a character encoding that should be specified when reading
  - if you read a buffer without specifying an encoding, we get back a buffer object
  - a buffer is a lower level data structure to represent a sequence of binary data
  - unlike arrays once a buffer is allocated, it cannot be resized

  Creating a buffer:
  - Buffer.from()
  - Buffer.alloc(8) - creates a filled buffer of a certain size e.g. 8
  - Buffer.allocUnsafe(8) - will not fill the created data, this is risky because it could have old data
*/

// Here is an example to understand difference between buffered data and normal data using thesame 'utf-8' string

const string = 'touche';
const buffer = Buffer.from('touche');

console.log(string, string.length);// touche 6
console.log(buffer, buffer.lenght); /*
 <Buffer 74 6f 75 63 68 c3 a9>, this buffer does not have a character encoding so it will represent
 represent the special character with it's internal 'utf-8' representation and returns the actual number of bytes used while the
 string is counting characters based on the default 'utf-8' encoding 
*/

// Example
const {StringDecoder} = require('string_decoder');
const decoder = new StringDecoder('utf8');

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk != null) {
        const buffer = Buffer.from([chunk]);
        console.log('With .toString():', buffer.toString()); // input: 0*AC , output: ?
        console.log('with stringDecoder', decoder.write(buffer)); // input: 0*AC , output: euro sign
    }
});

/**
 * buffers are useful when we need to read things like an image file from a tcp stream or a compressed file or any other form
 * of binary data access
 * 
  - you can use familiar methods e.g. includes, slice e.t.c though they have a few differences from arrays
  - e.g. slice shares same memory with original data
 */

 /**
  * when converting streams of binary data, you should always use the 'StringDecoder' module because it handles multibyte character
  * much better especially incomplete multybyte. unlike the built in Buffer.toString, 'StringDecoder' preseves the incomplete encoded
  * characters until and then returns the result
  */