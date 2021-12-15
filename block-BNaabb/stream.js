var http = require("http");

var server = http.createServer(handlerServer);

function hnadlerServer(req, res) {
  res.end();
}

server.listen(3456);
