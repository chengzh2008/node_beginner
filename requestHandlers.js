var exec = require('child_process').exec,
    handlers = exports = module.exports = {}; //jshint ignore:line
handlers.start = function (response) {
    console.log('Request handler.start was called');
    var content = "empty";

    exec("find /",
        {tiemout: 10000, maxBuffer: 20000 * 1024},
        function (err, stdout, stderr) {
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.write(stdout);
            response.end();

        });
};

handlers.upload = function (response) {
    console.log('Requet handler.upload was called');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello Upload');
    response.end();
};
