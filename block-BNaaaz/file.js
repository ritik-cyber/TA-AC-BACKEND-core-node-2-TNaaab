var http = require("http");
var fs = require("fs");

var server = http.createServer(handlerServer);

function handlerServer(req, res) {
  res.setHeader("Content-type", "text/html");
  fs.createReadStream("./readme.txt").pipe(res);
}

server.listen(5000);
