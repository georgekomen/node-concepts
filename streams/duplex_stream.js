/**
 * With duplex stream, we can implement both the writable and readble streams with thesame object
 * 
 * It's as if we inherit from both interfaces
 * 
 * We have to implement both the write and read functions
 */
const { Duplex } = require('stream');

const inoutStream = new Duplex({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    },

    read(size) {
        if (this.currentCharCode > 90) {
            this.push(null);
            return;
        }
        this.push(String.fromCharCode(this.currentCharCode++));
    }
});

inoutStream.currentCharCode = 65;
process.stdin.pipe(inoutStream).pipe(process.stdout);