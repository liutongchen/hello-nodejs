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
        Object.keys(sockets).map(key => sockets[key]).forEach((value) => {
            value.write(`${socket.id}: `);
            value.write(data);
        });
    });

    socket.on('end', () => {
        "use strict";
        delete sockets[socket.id];
        console.log('Client disconnected');
    });
});

server.listen(8000, () => console.log('Server bound'));