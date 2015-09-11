'use strict';

var MainPage = require('./pages/Main.page');

describe('Stavros', function () {
  var mainPage;
  beforeEach(function () {
    mainPage = new MainPage();
    mainPage.navigateTo();
  });

  it('should have a title', function () {
    expect(mainPage.title).toEqual('Stavros');
  });

  it('should support opening an about page which contain product name and version', function () {
    mainPage.openAbout()
      .then(function (aboutPage) {
        expect(aboutPage.product).toEqual('Stavros');
        expect(aboutPage.version).toEqual('0.9');
      });
  });

  it('should show a list of activities (mera utförligt: antal element, exempel på några element)', function () {
    mainPage.activityList
      .then(function (list) {
        expect(list.length).toBeGreaterThan(0);
      });
  });

  it('should add the points of an activity to the total sum, when completing (checking) the activity', function () {
  });

  it('should support filtering activities', function () {
  });

  it('should support leveling (exempel: beskriv en nivå)', function () {
  });

  it('should support unchecking the completion status of all activities', function () {
  });
});
