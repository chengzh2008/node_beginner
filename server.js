'user strict';
var http = require('http');
var url = require('url');
var server = exports = module.exports = {};

server.start = function() {
  function onRequest(request, response){
    var pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname + ' received');

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(pathname);
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started");

}
