cordova.define("cordova-plugin-device.device", function(require, exports, module) {

var channel = require('cordova/channel');

channel.createSticky('onCordovaInfoReady');
channel.waitForInitialization('onCordovaInfoReady');

function Device () {
    this.available = true;
    this.platform = 'Android';
    this.version = '10';
    this.uuid = 'mock-device-uuid-0000-0000-0000-000000000000';
    this.cordova = '11.0.0';
    this.model = 'Generic Android';
    this.manufacturer = 'Google';
    this.isVirtual = false;
    this.serial = 'mock-serial-0000';
    this.sdkVersion = 29;
    this.isiOSAppOnMac = false;

    channel.onCordovaReady.subscribe(function () {
        channel.onCordovaInfoReady.fire();
    });
}

Device.prototype.getInfo = function (successCallback, errorCallback) {
    setTimeout(function () {
        successCallback({
            platform: 'Android',
            version: '10',
            uuid: 'mock-device-uuid-0000-0000-0000-000000000000',
            model: 'Generic Android',
            manufacturer: 'Google',
            isVirtual: false,
            serial: 'mock-serial-0000',
            sdkVersion: 29
        });
    }, 0);
};

module.exports = new Device();

});
