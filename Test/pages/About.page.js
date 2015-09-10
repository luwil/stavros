'use strict';
var webdriver = browser.driver;
var until = protractor.until;
function AboutPage(baseUrl) {
}

AboutPage.prototype = Object.create({}, {
  version: {
    get: function () {
      return webdriver.findElement(By.id('version')).getText();
    }
  },
  waitUntilVisible: {
    value: function () {
      var self = this;
      return webdriver
        .wait(until.elementLocated(By.id('about')), 10000)
        .then(function () {
          return self;
        });
    }
  }
});

module.exports = AboutPage;