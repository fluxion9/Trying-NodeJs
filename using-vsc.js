const http = require('http');
const hostname = '127.0.0.1';
const port = 2000;


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/plain');
    res.end("Hello there!\n");
});

server.listen(port, hostname, () => {
    console.log('server running at 127.0.0.1\n');
});