cordova.define("cordova-plugin-facebook-connect.FacebookConnectPlugin", function(require, exports, module) {
var exec = require('cordova/exec')

var MOCK_FB_TOKEN = "mock-fb-access-token-abc123xyz";
var MOCK_FB_USER_ID = "mock-fb-uid-001";

var MOCK_LOGIN_STATUS = {
  status: "connected",
  authResponse: {
    accessToken: MOCK_FB_TOKEN,
    userID: MOCK_FB_USER_ID,
    expiresIn: 999999,
    signedRequest: "mock-signed-request",
    grantedScopes: "email,public_profile"
  }
};

exports.getApplicationId = function (s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'getApplicationId', [])
}

exports.setApplicationId = function (appId, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'setApplicationId', [appId])
}

exports.getApplicationName = function (s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'getApplicationName', [])
}

exports.setApplicationName = function (appName, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'setApplicationName', [appName])
}

exports.getLoginStatus = function (force, s, f) {
  if (typeof force === 'function') {
    s = force;
    f = s;
    force = false;
  }
  setTimeout(function () { if (s) s(MOCK_LOGIN_STATUS); }, 0);
}

exports.showDialog = function (options, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'showDialog', [options])
}

exports.login = function (permissions, s, f) {
  setTimeout(function () { if (s) s(MOCK_LOGIN_STATUS); }, 0);
}

exports.loginWithLimitedTracking = function (permissions, nonce, s, f) {
  setTimeout(function () { if (s) s(MOCK_LOGIN_STATUS); }, 0);
}

exports.checkHasCorrectPermissions = function (permissions, s, f) {
  setTimeout(function () { if (s) s(true); }, 0);
}

exports.isDataAccessExpired = function (s, f) {
  setTimeout(function () { if (s) s(false); }, 0);
}

exports.reauthorizeDataAccess = function (s, f) {
  setTimeout(function () { if (s) s(MOCK_LOGIN_STATUS); }, 0);
}

exports.setAutoLogAppEventsEnabled = function (enabled, s, f) {
  setTimeout(function () { if (s) s({}); }, 0);
}

exports.setAdvertiserIDCollectionEnabled = function (enabled, s, f) {
  setTimeout(function () { if (s) s({}); }, 0);
}

exports.setAdvertiserTrackingEnabled = function (enabled, s, f) {
  setTimeout(function () { if (s) s({}); }, 0);
}

exports.setDataProcessingOptions = function (options, country, state, s, f) {
  setTimeout(function () { if (s) s({}); }, 0);
}

exports.setUserData = function (userData, s, f) {
  setTimeout(function () { if (s) s({}); }, 0);
}

exports.clearUserData = function (s, f) {
  setTimeout(function () { if (s) s({}); }, 0);
}

exports.logEvent = function (name, params, valueToSum, s, f) {
  setTimeout(function () { if (s) s({}); }, 0);
}

exports.logPurchase = function (value, currency, params, s, f) {
  if (typeof params === 'function') {
    s = params;
    f = s;
    params = undefined;
  }
  setTimeout(function () { if (s) s({}); }, 0);
}

exports.getAccessToken = function (s, f) {
  setTimeout(function () { if (s) s(MOCK_FB_TOKEN); }, 0);
}

exports.logout = function (s, f) {
  setTimeout(function () { if (s) s({}); }, 0);
}

exports.getCurrentProfile = function (s, f) {
  setTimeout(function () {
    if (s) s({
      userID: MOCK_FB_USER_ID,
      name: "Demo User",
      email: "demo@duocards.com",
      imageURL: null
    });
  }, 0);
}

exports.api = function (graphPath, permissions, httpMethod, s, f) {
  permissions = permissions || []
  if (typeof httpMethod === 'function') {
    s = httpMethod;
    f = s;
    httpMethod = undefined;
  }
  setTimeout(function () { if (s) s({ data: [] }); }, 0);
}

exports.getDeferredApplink = function (s, f) {
  setTimeout(function () { if (s) s(null); }, 0);
}

exports.activateApp = function (s, f) {
  setTimeout(function () { if (s) s({}); }, 0);
}

});
