const EventEmitter = require('events');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new EventEmitter();
const server = require('./server')(client);
server.on('response', (res) => {
    console.log(`response: ${res}`);
});

let command, args;

rl.on('line', (input) => {
    "use strict";
    [command, ...args] = input.split(' ');
    client.emit('command', command, args);
});