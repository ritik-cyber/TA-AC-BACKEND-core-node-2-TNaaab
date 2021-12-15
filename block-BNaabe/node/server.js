var http = require("http");

var server = http.createServer(handlerServer);

function handlerServer(req, res) {
  var store = "";

  if (req.method === "PSOT" && req.url === "/") {
    res.setHeader("Content-type", "text/plain");
    res.end();
  }
}
