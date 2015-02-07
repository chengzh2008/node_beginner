var querystring = require('querystring'),
    fs = require('fs'),
    formidable = require('formidable'),
    handlers = exports = module.exports = {}; //jshint ignore:line

handlers.start = function (response) {
    console.log('Request handler.start was called');
    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" ' + 'content="text/html; charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" enctype="multipart/form-data" ' + 'method="post">' +
        '<input type="file" name="upload">' +
        '<input type="submit" value="Upload file" />' + '</form>' +
        '</body>' +
        '</html>';

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(body);
    response.end();


};

handlers.upload = function (response, request) {
    console.log('Request handler.upload was called');

    var form = new formidable.IncomingForm();
    console.log('about to parse');
    form.parse(request, function (err, fields, files) {
        console.log('parsing done');

        // handling file error on windows
        fs.rename(files.upload.path, "/tmp/test.png", function (error) {
            if (error) {
                fs.unlink("/tmp/test.png");
                fs.rename(files.upload.path, "/tmp/test.png");
            }
        });
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("received image:<br/>");
        response.write("<img src='/show' />");
        response.end();
    });
};

handlers.show = function (response, postData) {
    console.log('Request handle.show was called');
    fs.readFile("/tmp/test.png", "binary", function (err, file) {
        if (err) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(err + "\n");
            response.end();
        } else {
            response.writeHead(200, {"Content-Type": "image/png"});
            response.write(file, "binary");
            response.end();
        }
    })
}
