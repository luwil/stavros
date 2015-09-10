'use strict';

var MainPage = require('./pages/Main.page');

describe('Stavros', function () {
  var mainPage;
  beforeEach(function () {
    mainPage = new MainPage();
  });

  it('should have a title', function () {
    expect(browser.getTitle()).toEqual('Stavros');
  });

  it('should support opening about page', function () {
    mainPage.openAbout().then(function (aboutPage) {
      expect(aboutPage.version).toEqual('0.9');
    });
  });
});
