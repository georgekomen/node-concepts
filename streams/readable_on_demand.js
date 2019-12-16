// another implementation for pushing data on demand
// this implementation can push partial data to the queue
const { Readable } = require('stream');
const inStream = new Readable({
    read(size) {
        setTimeout(() => {
            if (this.currentCharCode > 90) {
                this.push(null);
                return;
            }
            this.push(String.fromCharCode(this.currentCharCode++));
        }, 300);
    }
});
inStream.currentCharCode = 65;
inStream.pipe(process.stdout);