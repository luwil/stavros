'use strict';

describe('Stavros', function() {
  beforeEach(function(){
    browser.get('http://localhost:8080/');
  });

  it('should clear all selected', function() {
    var activity1 = element(by.repeater('activity in activities').row(0));
    activity1.element(by.className('activity-btn')).click();

    element(by.buttonText('Rensa alla valda')).click();

  }); 
});
