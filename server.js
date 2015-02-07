'user strict';
var http = require('http'),
    url = require('url'),
    server = exports = module.exports = {};  // jshint ignore:line

server.start = function (route, handle) {
    function onRequest(request, response) {
        var postData = "";
            pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + ' received');

        request.setEncoding('utf8');
        request.addListener('data', function(postDataChunk){
            postData += postDataChunk;
            console.log('Recerved POST data chunk "' + postDataChunk + '".');
        });

        request.addListener('end', function(){
            route(handle, pathname, response, postData);
        })

    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started");

};

