'use strict';
describe('Lab 1', function () {

  /**
   * Nollställer poängen mellan testerna
   */
  beforeEach(function () {
    element(by.css('button[ng-click="clearSelected()"]')).click();
    expect(element(by.binding('getScore()')).getText()).toBe('0');
  });

  it('Verifiera att aktuell nivå (texten LEVEL 1) visas på sidan', function () {

  });

  it('Skriv in text i användarnamns-input och kontrollera med browser.sleep()', function () {

  });

  it('Klicka på knappen "Logga in" och kolla vad som händer (använd browser.sleep() före och efter och titta i' +
    ' browsern)', function () {

  });

  it('Verifiera att antalet aktiviteter är 31', function () {

  });

});