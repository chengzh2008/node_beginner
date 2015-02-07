var handlers = exports = module.exports = {}; //jshint ignore:line
handlers.start = function () {
    console.log('Request handler.start was called');

    function sleep(milliSeconds) {
        var startTime = new Date().getTime();
        while(new Date().getTime() < startTime + milliSeconds);
    }

    sleep(10000);

    return 'Hello Start';
};

handlers.upload = function () {
    console.log('Requet handler.upload was called');
    return 'Hello Upload';
};
