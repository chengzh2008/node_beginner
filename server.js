'user strict';
var http = require('http'),
    url = require('url'),
    server = exports = module.exports = {};  // jshint ignore:line

server.start = function (route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname,
            content = route(handle, pathname);
        console.log('Request for ' + pathname + ' received');

        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write(content);
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started");

};

