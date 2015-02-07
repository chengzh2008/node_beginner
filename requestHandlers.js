var handlers = exports = module.exports = {}; //jshint ignore:line
handlers.start = function () {
    console.log('Request handler.start was called');
    return 'Hello Start';
};

handlers.upload = function () {
    console.log('Requet handler.upload was called');
    return 'Hello Upload';
};
