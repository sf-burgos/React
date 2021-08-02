const webSocketsServerPort = 8000;
const webSocketsServer = require('websocket').server;
const http = require('http');
const server = http.createServer();
server.listen(webSocketsServerPort);
const wsServer = new webSocketsServer({
    httpServer: server
})

