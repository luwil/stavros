'use strict';

describe('Stavros', function() {
  beforeEach(function(){
    browser.get('http://localhost:8080/');
  });

  it('should clear all selected', function() {
    element(by.buttonText('Rensa alla valda')).click();
  }); 
});
