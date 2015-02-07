var exec = require('child_process').exec,
    handlers = exports = module.exports = {}; //jshint ignore:line
handlers.start = function () {
    console.log('Request handler.start was called');
    var content = "empty";

    exec("ls -lah", function(err, stdout, stderr) {
        content = stdout;
    });

    return content;
};

handlers.upload = function () {
    console.log('Requet handler.upload was called');
    return 'Hello Upload';
};
