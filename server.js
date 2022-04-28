const http = require('http');
const app = require('./app');
const port = process.env.port || 2000;
const server = http.createServer(app);

server.listen(port);