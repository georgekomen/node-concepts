const EventEmitter = require('events');

class Server extends EventEmitter {
    constructor(client) {
        super();
        process.nextTick(() => {
            this.emit('response', 'Type a command')
        });

        client.on('command', (command, args) => {
            switch(command) {
                case 'help':
                case 'ls':
                    this[command](args);
                    break;
                default:
                    this.emit('response', 'Unknown command..')    
            }
        });
    }

    help(args) {
        this.emit('response', args.join(' '))
    }

    ls(args) {
        this.emit('response', args.join(' '))
    }
}

module.exports = (client) => new Server(client);