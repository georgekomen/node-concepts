const http = require('http');
const pid = process.pid;

let status;
http.createServer((req, res) => {
    for (let i=0; i<1e7; i++);
    res.end(`Handled by process ${pid}, status: ${status}`);   
}).listen(8080, () => {
    console.log(`Started process ${pid}`);
});

process.on('message', msg => {
    status = msg.status;
});