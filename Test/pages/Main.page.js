'use strict';

var AboutPage = require('./About.page.js');

function MainPage() {
}

MainPage.prototype = Object.create({}, {
  navigateTo: {
    value: function () {
      var self = this;
      return browser.getProcessedConfig()
        .then(function (config) {
          return browser.get(config.baseUrl + '/');
        })
        .then(function () {
          return self;
        })
    }
  },
  title: {
    get: function () {
      return browser.getTitle();
    }
  },
  activityList: {
    get: function () {
      return element.all(by.repeater('activity in activities'));
    }
  },
  filterInput: {
    get: function () {
      return element(by.model('search'));
    }
  },
  typeFilter: {
    value: function (keys) {
      var self = this;
      return this.filterInput.sendKeys(keys)
        .then(function () {
          return self;
        })
    }
  },
  activityAt: {
    value: function (idx) {
      return this.activityList.get(idx).getText();
    }
  },
  toggleActivityAt: {
    value: function (idx) {
      var self = this;
      return this.activityList.get(idx).element($('.activity-btn').click())
        .then(function () {
          return self;
        });
    }
  },
  openAbout: {
    value: function () {
      return element(by.css("#about-link")).click()
        .then(function () {
          return new AboutPage().waitUntilVisible();
        });
    }
  }
});

module.exports = MainPage;