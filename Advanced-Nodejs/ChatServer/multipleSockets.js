const server = require('net').createServer();
let counter = 0;
let sockets = {};

server.on('connection', socket => {
    socket.id = counter++;
    sockets[socket.id] = socket;

    console.log('Client connected');
    socket.write('Welcome!\n');

    socket.on('data', data => {
        "use strict";
        Object.entries(sockets).forEach((socket) => {
            socket.write(`${socket.id}`);
            socket.write(data);
        });
    });

    socket.on('end', () => {
        "use strict";
        console.log('Client disconnected');
    });
});

server.listen(8000, () => console.log('Server bound'));