'use strict';
describe('Lab 1', function(){
  
  it('Verifiera att aktuell nivå (texten LEVEL 1) visas på sidan', function() {
    expect(element(by.binding('getLevel().number')).getText()).toBe('LEVEL 1');
  });

  it('Skriv in text i användarnamns-input och kontrollera med browser.sleep()', function() {
    browser.sleep(3000);
    element(by.model('userName')).sendKeys('Sune');
    browser.sleep(3000);
  });

  it('Klicka på knappen "Logga in" och kolla vad som händer (använd browser.sleep() före och efter och titta i' +
    ' browsern)', function() {
    browser.sleep(3000);
    element(by.buttonText('Logga in')).click();
    browser.sleep(3000);

    element(by.id('logout-link')).click();
  });

  it('Verifiera att antalet aktiviteter är 31', function() {
    expect(element.all(by.repeater('activity in activities')).count()).toBe(31);
  });
});