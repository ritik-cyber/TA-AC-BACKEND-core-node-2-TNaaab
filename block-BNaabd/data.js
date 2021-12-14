var http = require("http");

var server = http.createServer(handlerServer);

function handlerServer(req, res) {}

server.listen(7000);
