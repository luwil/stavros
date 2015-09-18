'use strict';

describe('Användare ska kunna återkomma till appen', function () {
  beforeEach(function () {
    element(by.css('button[ng-click="clearSelected()"]')).click();
  });

  it('Det ska gå att logga in med namn. När man loggar in som "Sune" kommer namnet för' +
    ' level 1 bli "Sune Banan" och dessutom visas logout-länk.', function () {
    expect(element(by.id('logout-link')).isPresent()).toBe(false);

    element(by.model('userName')).sendKeys('Sune');
    element(by.buttonText('Logga in')).click();

    expect(element(by.binding('getLevel().name')).getText()).toBe('Sune Banan');
    expect(element(by.id('logout-link')).isPresent()).toBe(true);

    element(by.id('logout-link')).click();
  });

  it('Det ska gå att logga ut. När man loggar ut försvinner logout-länk och level 1 namnet återgår till standard' +
    ' ("Sven Banan")', function () {

    element(by.model('userName')).sendKeys('Sune');
    element(by.buttonText('Logga in')).click();


    element(by.id('logout-link')).click();

    expect(element(by.binding('getLevel().name')).getText()).toBe('Sven Banan');
    expect(element(by.id('logout-link')).isPresent()).toBe(false);
  });
});