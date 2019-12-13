const EventEmitter = require('events');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new EventEmitter();
const server = require('./server')(client);

let command, args;
rl.on('line', (input) => {
    [command, ...args] = input.split(' ');
    client.emit('command', command, args);
});

server.on('response', reponse => {
    process.stdout.write('\u001B[2J\u001B[0;0F'); // clear the terminal
    process.stdout.write(reponse); // write response
    process.stdout.write('\n\> ') // expect another command
})