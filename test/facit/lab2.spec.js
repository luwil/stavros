'use strict';

var util = require('./util');

describe('Lab 2', function () {
  /**
   * Nollställer poängen mellan testerna
   */
  beforeEach(function () {
    browser.get('http://localhost:8080');
    element(by.css('button[ng-click="clearSelected()"]')).click();
    expect(element(by.binding('getScore()')).getText()).toBe('0');
  });

  it('Aktiviteterna ska vara poängsatta, testa genom att bocka för alla aktiviteter och kontrollera att totalpoängen blir 86.', function () {
    element.all(by.repeater('activity in activities'))
      .each(function (rowElement) {
        util.scrollToTop()
          .then(function () {
            rowElement.element(by.className('activity-btn')).click();
          });
      });
    expect(element(by.binding('getScore()')).getText()).toBe('86');
  });

  it('Det ska gå att logga in med namn. När man loggar in som "Sune" kommer namnet för LEVEL 1 bli "Sune Banan" och dessutom visas logout-länk.', function () {
    expect(element(by.id('logout-link')).isPresent()).toBe(false);

    element(by.model('userName')).sendKeys('Sune');
    element(by.buttonText('Logga in')).click();

    expect(element(by.binding('getLevel().name')).getText()).toBe('Sune Banan');
    expect(element(by.id('logout-link')).isPresent()).toBe(true);

    element(by.id('logout-link')).click();
  });

  it('skall gå att visa en About-sida', function () {
    element(by.css("#about-link")).click()
      .then(function () {
        return browser.driver.wait(protractor.until.elementLocated(By.id('about')), 10000);
      })
      .then(function () {
        expect(browser.driver.findElement(By.id('product')).getText()).toEqual('Stavros');
      });
  });
});
