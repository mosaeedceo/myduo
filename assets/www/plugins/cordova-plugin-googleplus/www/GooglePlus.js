cordova.define("cordova-plugin-googleplus.GooglePlus", function(require, exports, module) {
function GooglePlus() {
}

var MOCK_GOOGLE_USER = {
  userId: "mock-google-uid-001",
  email: "demo@duocards.com",
  displayName: "Demo User",
  familyName: "User",
  givenName: "Demo",
  imageUrl: null,
  idToken: "mock-google-id-token-abc123",
  serverAuthCode: "mock-server-auth-code",
  accessToken: "mock-google-access-token-xyz"
};

GooglePlus.prototype.isAvailable = function (callback) {
  setTimeout(function () { if (callback) callback(true); }, 0);
};

GooglePlus.prototype.login = function (options, successCallback, errorCallback) {
  setTimeout(function () { if (successCallback) successCallback(MOCK_GOOGLE_USER); }, 0);
};

GooglePlus.prototype.trySilentLogin = function (options, successCallback, errorCallback) {
  setTimeout(function () { if (successCallback) successCallback(MOCK_GOOGLE_USER); }, 0);
};

GooglePlus.prototype.logout = function (successCallback, errorCallback) {
  setTimeout(function () { if (successCallback) successCallback({}); }, 0);
};

GooglePlus.prototype.disconnect = function (successCallback, errorCallback) {
  setTimeout(function () { if (successCallback) successCallback({}); }, 0);
};

GooglePlus.prototype.getSigningCertificateFingerprint = function (successCallback, errorCallback) {
  setTimeout(function () { if (successCallback) successCallback("mock-fingerprint"); }, 0);
};

GooglePlus.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.googleplus = new GooglePlus();
  return window.plugins.googleplus;
};

cordova.addConstructor(GooglePlus.install);
});
