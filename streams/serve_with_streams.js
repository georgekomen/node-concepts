/**
 * since the big file is a readable stream and res is a writable streams,
 * we can then pipe the stream from the readable to the writable stream and 
 * avoid filling up the memory
*/

const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    const src = fs.createReadStream('./big.file');
    src.pipe(res);
});

server.listen(8000);