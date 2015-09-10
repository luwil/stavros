'use strict';

var MainPage = require('./pages/Main.page');

describe('Stavros', function() {
  var mainPage;
  beforeEach(function () {
    mainPage = new MainPage();
    mainPage.navigateTo();
  });

  it('should have a title', function () {
    expect(mainPage.title).toEqual('Stavros');
  });

  it('should support opening about page', function () {
    mainPage.openAbout().then(function (aboutPage) {
      expect(aboutPage.version).toEqual('0.9');
    });
  });

  it ('should show activities', function(){
    expect(mainPage.activityList.count()).toBeGreaterThan(0);
  });
  
  it ('should show points', function(){
  });
  
  it ('should support filtering', function(){
  });
  
  it ('should support leveling', function(){
  });
  
});
