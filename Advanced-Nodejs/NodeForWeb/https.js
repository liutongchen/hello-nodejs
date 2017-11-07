//use cli to generate a self-signed certificate first:
//openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -nodes
const fs = require('fs');
//http.Server object
const server = require('https')
    .createServer({
        key: fs.readFileSync('../key.pem'),
        cert: fs.readFileSync('../cert.pem')
    });

server.on('request', (req, res) => {
    "use strict";
    //req belongs to http.IncomingMessage class in server code
    //res belongs to http.ServerResponse class
    res.writeHead(200, {'content-type' : 'text/plain'});
    res.end('Hello world\n');
});

server.listen(443); //default port for https communication