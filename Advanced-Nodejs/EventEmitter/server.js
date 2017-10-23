const EventEmitter = require('events');

class Server extends EventEmitter {
    constructor(client) {
        super();
        process.nextTick(() => {
            this.emit('response',
                'Type a command (eg. help, add, ...)')
        });
        client.on('command', (command, args) => {
            switch (command) {
                case 'help':
                case 'add':
                case 'listAll':
                case 'del':
                    this[command](args);
                    break;
                default:
                    this.emit('response', 'Unknown command...');
            }
        })
    }

    help() {
        this.emit('response',
            'Available commands: help, add, listAll, del');
    }

    add(args) {
        this.emit('response', args.join(' '));
    }

    listAll() {
        this.emit('response', 'ls...');
    }

    del() {
        this.emit('response', 'delete...');
    }
}

module.exports = (client) => new Server(client);