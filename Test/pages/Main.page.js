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
      return element
        .all(by.repeater('activity in activities'))
        .map(function (elm, idx) {
          elm.getText();
          return new Activity(idx);
        }).then(function(list){
          return list;
        });
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
  activityAtIdx: {
    value: function (idx) {
      return this.activityList.get(idx)
        .then(function (elm) {
          return new Activity(elm, idx);
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

function Activity(idx) {
  this.idx = idx;
}

Activity.prototype = Object.create({}, {
  //label: {
  //  get: function () {
  //    return this.element.element($('#label-' + this.idx)).getText();
  //  }
  //},
  //toggle: {
  //  value: function () {
  //    var self = this;
  //    this.element.element($('#activity-btn' + this.idx))
  //      .click()
  //      .then(function () {
  //        return self;
  //      })
  //  }
  //}
});

module.exports = MainPage;