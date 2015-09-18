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
    expect(element(by.binding('getLevel().number')).getText()).toBe('LEVEL 1');
  });

  it('Skriv in text i användarnamns-input och kontrollera okulärt med browser.sleep(3000)', function () {
    browser.sleep(3000);
    element(by.model('userName')).sendKeys('Sune');
    browser.sleep(3000);
  });

  it('Klicka på knappen "Logga in" och kolla vad som händer (använd browser.sleep() före och efter och titta i browsern)', function () {
    browser.sleep(3000);
    element(by.buttonText('Logga in')).click();
    browser.sleep(3000);

    element(by.id('logout-link')).click();
  });

  it('Verifiera att antalet aktiviteter är 31', function () {
    expect(element.all(by.repeater('activity in activities')).count()).toBe(31);
  });
});
