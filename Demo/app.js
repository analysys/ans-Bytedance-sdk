import AnalysysAgent from './util/sdk/AnalysysAgent_ByteDance_SDK.min.js'
AnalysysAgent.debugMode = 2
AnalysysAgent.appkey = 'sdktest201907'
AnalysysAgent.uploadURL = 'https://sdk.analysys.cn'
// AnalysysAgent.encryptType = 1; //使用加密文件的时候 放开赋值。（直接放开不会报错）
AnalysysAgent.autoShare = true;
// AnalysysAgent.autoProfile = false;
AnalysysAgent.auto = true;
AnalysysAgent.autoTrack = true;

/**
 * @file app.js
 * @author tt
 */

/* globals tt */

App({
  onLaunch (options) {
    // do something when launch
  },
  onShow (options) {
    AnalysysAgent.appStart(options)
    // do something when show
  },
  onHide () {
    // do something when hide
  }
});