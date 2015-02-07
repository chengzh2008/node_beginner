'user strict';
var http = require('http'),
    url = require('url'),
    sys = require('sys'),
    formidable = require('formidable'),
    server = exports = module.exports = {};  // jshint ignore:line

server.start = function (route, handle) {
    function onRequest(req, res) {
        if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
            // parse a file upload
            var form = new formidable.IncomingForm();
            form.parse(req, function (err, fields, files) {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write('Received upload: \n\n');
                res.end(sys.inspect({fields: fields, files: files}));
            });
            return;
        }

        // show a file upload form
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(
            '<form action="/upload" enctpe = "multipart/form-data" ' +
            'method="post">' +
            '<input type="text" name="title"><br>' +
            '<input type="file" name="upload" multiple="multiple"><br>' +
            '<input type="submit" value="Upload">' +
            '<form>'
        );

    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started");

};

