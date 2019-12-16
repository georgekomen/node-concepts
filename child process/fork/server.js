const server = http.createServer();

server.on('request', (req, res) => {
    if(req.url === '/compute') {
        const compute = fork('compute.js');
        compute.send('start');
        compute.on('message', sum => {
            res.end(`Sum is ${sum}`);
        });
    } else {
        res.end('Ok')
    }
});