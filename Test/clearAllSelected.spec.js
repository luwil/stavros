'use strict';

describe('Stavros', function() {
  beforeEach(function(){
    browser.get('http://localhost:8080/');
  });

  it('should clear all selected', function() {
    // Assert init
    expect(element(by.id('score')).getText()).
      toEqual('0');

    // Setup
    var activity1 = element(by.repeater('activity in activities').row(0));
    activity1.element(by.className('activity-btn')).click();

    // Assert setup
    expect(element(by.id('score')).getText()).
      toEqual('2');

    // Do test
    element(by.buttonText('Rensa alla valda')).click();

    // Assert test
    expect(element(by.id('score')).getText()).
      toEqual('0');
  }); 
});
