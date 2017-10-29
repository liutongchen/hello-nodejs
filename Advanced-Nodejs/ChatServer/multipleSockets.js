const server = require('net').createServer();
let counter = 0;
let sockets = {};

function timestamp() {
    "use strict";
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
}

server.on('connection', socket => {
    socket.id = counter++;
    sockets = {}; //only add sockets where user has input their names

    console.log('Client connected');
    socket.write('Please type your name\n');

    socket.on('data', data => {
        "use strict";
        if (!sockets[socket.id]) {
            socket.name = data.toString().trim();
            socket.write(`Welcome ${socket.name}!\n`);
            sockets[socket.id] = socket;
            return;
        }
        Object.keys(sockets).map(key => sockets[key]).forEach((cs, index) => {
            if (index !== socket.id) {
                cs.write(`${timestamp()}\n`);
                cs.write(`${socket.name}: `);
                cs.write(data);
            }
        });
    });

    socket.on('end', () => {
        "use strict";
        console.log('Client disconnected');
    });
});

server.listen(8000, () => console.log('Server bound'));