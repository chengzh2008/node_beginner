'user strict';
var http = require('http'),
    url = require('url'),
    server = exports = module.exports = {};  // jshint ignore:line

server.start = function (route, handle) {
    function onRequest(req, res) {
        var pathname = url.parse(req.url).pathname;
        console.log('Request for ' + pathname + ' received');
        route(handle, pathname, res, req);
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started");

};

