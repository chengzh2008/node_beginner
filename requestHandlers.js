var exec = require('child_process').exec,
    querystring = require('querystring');
    handlers = exports = module.exports = {}; //jshint ignore:line
handlers.start = function (response, postData) {
    console.log('Request handler.start was called');
    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' + 'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" method="post">' +
        '<textarea name="text" rows="20" cols="60"></textarea><br>' + '<input type="submit" value="Submit text" />' + '</form>' +
        '</body>' +
        '</html>';

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(body);
    response.end();


};

handlers.upload = function (response, postData) {
    console.log('Requet handler.upload was called');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("You have sent: " + querystring.parse(postData).text);
    response.end();
};
