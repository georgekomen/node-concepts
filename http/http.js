/**
 * https is the http protocol over tls ssl
 */

 /**
  * to generate certicicates for testing purposes:
  * 
  * openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -nodes // this command will output the private key and the certificate
  * 
  */

const fs = require('fs');
const server = require('https')
    .createServer({
        key: fs.readFileSync('./key.pem'),
        cert: fs.readFileSync('./cert.pem')
    });

server.on('request', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hello world\n');
});

server.listen(443);