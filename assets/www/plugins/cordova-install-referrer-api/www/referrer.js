cordova.define("cordova-install-referrer-api.referrer", function(require, exports, module) {
module.exports = {
    get: function () {
        return new Promise(function(resolve, reject) {
            cordova.exec(resolve, reject, 'Referrer', 'get');
        });
    }
};
});
