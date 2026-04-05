cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "admob-plus-cordova.AdMob",
      "file": "plugins/admob-plus-cordova/www/admob.js",
      "pluginId": "admob-plus-cordova",
      "clobbers": [
        "admob"
      ]
    },
    {
      "id": "com-darryncampbell-cordova-plugin-intent.IntentShim",
      "file": "plugins/com-darryncampbell-cordova-plugin-intent/www/IntentShim.js",
      "pluginId": "com-darryncampbell-cordova-plugin-intent",
      "clobbers": [
        "intentShim"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-clarity.ClarityPlugin",
      "file": "plugins/cordova-clarity/www/clarity_plugin.js",
      "pluginId": "cordova-clarity",
      "clobbers": [
        "ClarityPlugin"
      ]
    },
    {
      "id": "cordova-install-referrer-api.referrer",
      "file": "plugins/cordova-install-referrer-api/www/referrer.js",
      "pluginId": "cordova-install-referrer-api",
      "clobbers": [
        "cordova.plugins.referrer"
      ]
    },
    {
      "id": "cordova-launch-review.LaunchReview",
      "file": "plugins/cordova-launch-review/www/launchreview.js",
      "pluginId": "cordova-launch-review",
      "clobbers": [
        "LaunchReview"
      ]
    },
    {
      "id": "cordova-open-native-settings.Settings",
      "file": "plugins/cordova-open-native-settings/www/settings.js",
      "pluginId": "cordova-open-native-settings",
      "clobbers": [
        "cordova.plugins.settings"
      ]
    },
    {
      "id": "cordova-plugin-appsflyer-sdk.appsflyer",
      "file": "plugins/cordova-plugin-appsflyer-sdk/www/appsflyer.js",
      "pluginId": "cordova-plugin-appsflyer-sdk",
      "clobbers": [
        "window.plugins.appsFlyer"
      ]
    },
    {
      "id": "cordova-plugin-appsflyer-sdk.AppsFlyerError",
      "file": "plugins/cordova-plugin-appsflyer-sdk/www/AppsFlyerError.js",
      "pluginId": "cordova-plugin-appsflyer-sdk",
      "clobbers": [
        "AppsFlyerError"
      ]
    },
    {
      "id": "cordova-plugin-audioinput.AudioInput",
      "file": "plugins/cordova-plugin-audioinput/www/audioInputCapture.js",
      "pluginId": "cordova-plugin-audioinput",
      "clobbers": [
        "audioinput"
      ]
    },
    {
      "id": "cordova-plugin-browsertab.BrowserTab",
      "file": "plugins/cordova-plugin-browsertab/www/browsertab.js",
      "pluginId": "cordova-plugin-browsertab",
      "clobbers": [
        "cordova.plugins.browsertab"
      ]
    },
    {
      "id": "cordova-plugin-buildinfo.BuildInfo",
      "file": "plugins/cordova-plugin-buildinfo/www/buildinfo.js",
      "pluginId": "cordova-plugin-buildinfo",
      "clobbers": [
        "BuildInfo"
      ]
    },
    {
      "id": "cordova-plugin-consent.Consent",
      "file": "plugins/cordova-plugin-consent/www/consent.js",
      "pluginId": "cordova-plugin-consent",
      "clobbers": [
        "consent"
      ]
    },
    {
      "id": "cordova-plugin-customurlscheme.LaunchMyApp",
      "file": "plugins/cordova-plugin-customurlscheme/www/android/LaunchMyApp.js",
      "pluginId": "cordova-plugin-customurlscheme",
      "clobbers": [
        "window.plugins.launchmyapp"
      ]
    },
    {
      "id": "cordova-plugin-facebook-connect.FacebookConnectPlugin",
      "file": "plugins/cordova-plugin-facebook-connect/www/facebook-native.js",
      "pluginId": "cordova-plugin-facebook-connect",
      "clobbers": [
        "facebookConnectPlugin"
      ]
    },
    {
      "id": "cordova-plugin-firebase-analytics.FirebaseAnalytics",
      "file": "plugins/cordova-plugin-firebase-analytics/www/FirebaseAnalytics.js",
      "pluginId": "cordova-plugin-firebase-analytics",
      "merges": [
        "cordova.plugins.firebase.analytics"
      ]
    },
    {
      "id": "cordova-plugin-firebase-messaging.FirebaseMessaging",
      "file": "plugins/cordova-plugin-firebase-messaging/www/FirebaseMessaging.js",
      "pluginId": "cordova-plugin-firebase-messaging",
      "merges": [
        "cordova.plugins.firebase.messaging"
      ]
    },
    {
      "id": "cordova-plugin-googleplus.GooglePlus",
      "file": "plugins/cordova-plugin-googleplus/www/GooglePlus.js",
      "pluginId": "cordova-plugin-googleplus",
      "clobbers": [
        "window.plugins.googleplus"
      ]
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.IonicWebView",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "Ionic.WebView"
      ]
    },
    {
      "id": "cordova-plugin-purchase.CdvPurchase",
      "file": "plugins/cordova-plugin-purchase/www/store.js",
      "pluginId": "cordova-plugin-purchase",
      "clobbers": [
        "store",
        "CdvPurchase"
      ]
    },
    {
      "id": "cordova-universal-links-plugin.universalLinks",
      "file": "plugins/cordova-universal-links-plugin/www/universal_links.js",
      "pluginId": "cordova-universal-links-plugin",
      "clobbers": [
        "universalLinks"
      ]
    },
    {
      "id": "de.codevise.cordova.volume.Volume",
      "file": "plugins/de.codevise.cordova.volume/www/volume.js",
      "pluginId": "de.codevise.cordova.volume",
      "clobbers": [
        "plugin.volume"
      ]
    },
    {
      "id": "nl.madebymark.share.Share",
      "file": "plugins/nl.madebymark.share/www/share.js",
      "pluginId": "nl.madebymark.share",
      "clobbers": [
        "window.navigator.share"
      ]
    },
    {
      "id": "singular_cordova_sdk.SingularCordovaSdk",
      "file": "plugins/singular_cordova_sdk/www/SingularCordovaSdk.js",
      "pluginId": "singular_cordova_sdk",
      "clobbers": [
        "cordova.plugins.SingularCordovaSdk"
      ]
    },
    {
      "id": "singular_cordova_sdk.SingularConfig",
      "file": "plugins/singular_cordova_sdk/www/SingularConfig.js",
      "pluginId": "singular_cordova_sdk",
      "clobbers": [
        "cordova.plugins.SingularCordovaSdk.SingularConfig"
      ]
    },
    {
      "id": "singular_cordova_sdk.SingularIAP",
      "file": "plugins/singular_cordova_sdk/www/SingularIAP.js",
      "pluginId": "singular_cordova_sdk",
      "clobbers": [
        "cordova.plugins.SingularCordovaSdk.SingularIAP"
      ]
    },
    {
      "id": "singular_cordova_sdk.SingularAdData",
      "file": "plugins/singular_cordova_sdk/www/SingularAdData.js",
      "pluginId": "singular_cordova_sdk",
      "clobbers": [
        "cordova.plugins.SingularCordovaSdk.SingularAdData"
      ]
    },
    {
      "id": "singular_cordova_sdk.Events",
      "file": "plugins/singular_cordova_sdk/www/Events.js",
      "pluginId": "singular_cordova_sdk",
      "clobbers": [
        "cordova.plugins.SingularCordovaSdk.Events"
      ]
    },
    {
      "id": "singular_cordova_sdk.Attributes",
      "file": "plugins/singular_cordova_sdk/www/Attributes.js",
      "pluginId": "singular_cordova_sdk",
      "clobbers": [
        "cordova.plugins.SingularCordovaSdk.Attributes"
      ]
    }
  ];
  module.exports.metadata = {
    "admob-plus-cordova": "2.0.0-alpha.15",
    "com-darryncampbell-cordova-plugin-intent": "2.2.0",
    "cordova-plugin-device": "2.1.0",
    "cordova-clarity": "2.3.0",
    "cordova-install-referrer-api": "0.1.5",
    "cordova-launch-review": "4.1.0",
    "cordova-open-native-settings": "1.5.5",
    "cordova-plugin-androidx-adapter": "1.1.3",
    "cordova-plugin-appsflyer-sdk": "6.12.10-rc4",
    "cordova-plugin-audioinput": "1.0.2",
    "cordova-plugin-browsertab": "0.2.0",
    "cordova-plugin-buildinfo": "4.0.0",
    "cordova-plugin-consent": "3.0.0-alpha.7",
    "cordova-plugin-customurlscheme": "5.0.2",
    "cordova-plugin-facebook-connect": "3.2.0",
    "cordova-support-android-plugin": "2.0.4",
    "cordova-plugin-firebase-analytics": "8.0.0",
    "cordova-plugin-firebase-messaging": "8.0.1",
    "cordova-plugin-googleplus": "8.5.2",
    "cordova-plugin-inappbrowser": "5.0.0",
    "cordova-plugin-ionic-webview": "5.0.0",
    "cordova-plugin-openwith-ios": "1.0.0",
    "cordova-plugin-purchase": "13.11.1",
    "cordova-plugin-vibration": "3.1.1",
    "cordova-universal-links-plugin": "1.2.1",
    "de.codevise.cordova.volume": "0.0.1",
    "nl.madebymark.share": "0.1.1",
    "singular_cordova_sdk": "1.4.0"
  };
});