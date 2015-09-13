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
  scrollToTop: {
    value: function () {
      var self = this;
      return browser.executeScript('window.scrollTo(0,0);')
        .then(function () {
          return self;
        });
    }
  },
  activityList: {
    get: function () {
      return element
        .all(by.repeater('activity in activities'))
        .map(function (elm, idx) {
          return new Activity(idx);
        }).then(function (list) {
          return list;
        });
    }
  },
  activityAtIdx: {
    value: function (idx) {
      return this.activityList
        .then(function (list) {
          return list[idx];
        });
    }
  },
  clearActivities: {
    value: function () {
      var self = this;
      return $('#clear-button').click()
        .then(function () {
          return self;
        })
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
  openAbout: {
    value: function () {
      return element(by.css("#about-link")).click()
        .then(function () {
          return new AboutPage().waitUntilVisible();
        });
    }
  },
  score: {
    get: function () {
      return element(by.binding('getScore()')).getText()
        .then(function (text) {
          return Number(text);
        });
    }
  }
});

function Activity(idx) {
  this.idx = idx;
}

function activityElementAtIndex(idx) {
  return element(by.repeater('activity in activities').row(idx));
}

Activity.prototype = Object.create({}, {
  label: {
    get: function () {
      return activityElementAtIndex(this.idx)
        .element(by.binding('activity.name')).getText();
    }
  },
  points: {
    get: function () {
      return activityElementAtIndex(this.idx)
        .element(by.binding('activity.points')).getText()
        .then(function (text) {
          return Number(text);
        });
    }
  },
  toggle: {
    value: function () {
      var self = this;
      return activityElementAtIndex(this.idx)
        .element(by.className('activity-btn'))
        .click()
        .then(function () {
          return self;
        })
    }
  }
});

module.exports = MainPage;