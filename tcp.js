// a simple chat server

// tcp is best for emails, ssh, http and ftp
//udp is best for broadcasting, streaming, gaming, tunneling

/**
 * this is a basic network server example using the net's module createServer method that gives a server object
 * 
 * the server object emits a connection event(socket) everytime a client connects to it
 * we then create a connection handler that notifies incase of any new connection
 * the handler also gives us access to the connected socket itself
 * 
 * the socket object implements a duplex stream interface meaning that we can read and write to it
 * 
 * the socket being a duplex stream means that it's also an event emitter
 * 
 * that means we can listen to data event on this socket whose handler gives us access to a buffer object
 */

const server = require('net').createServer();
let counter = 0;
let sockets = {};

server.on('connection', socket => {
    socket.id = counter++;
    sockets[socket.id] = socket;

    console.log('client connected');
    socket.write('Welcome new client!\n');

    socket.on('data', data => {
        Object.entries(sockets).forEach(([key, client_socket]) => {
            console.log('data is: ', data); //buffer because reading doesn't assume any encoding
    
            if(socket.id === key) return; // do not echo back message to the sender
            // echo data back to client
            client_socket.write(`from ${socket.id} : `);
            client_socket.write(data); // write assumes utf8 encoding so the user receives back a string
        });
    });

    socket.on('end', () => {
        delete sockets[socket.id];
        console.log('Client disconnected, you can not write to this socket anymore');
    });

    socket.setEncoding('utf8'); // you can also set a global encoding here so read and write uses this by default
});

server.listen(8000, () => console.log('server bound'));


// nc localhost 8000 - create many terminal sessions with this