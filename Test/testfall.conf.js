/**
 * Created by anders on 15-09-03.
 */

'use strict';

var config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  baseUrl: 'http://localhost:8080',

  specs: ['*.spec.js'],

  multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }],
  jasmineNodeOpts: {
    isVerbose: true
  },
  onPrepare: function () {
    browser.driver.manage().window().setSize(500, 1000);
    return browser.get(config.baseUrl);
  }
};

exports.config = config;