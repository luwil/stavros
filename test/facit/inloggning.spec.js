'use strict'

describe('Användare ska kunna återkomma till appen', function () {
  beforeEach(function () {
    element(by.css('button[ng-click="clearSelected()"]')).click();
  });

  it('Det ska gå att logga in med namn. När man loggar in som "Guldrun" kommer namnet för' +
    ' level 1 bli "Guldrun Banan" och dessutom visas logout-länk.', function () {
    expect(element(by.id('logout-link')).isPresent()).toBe(false);

    element(by.model('userName')).sendKeys('Guldrun');
    element(by.css('button[ng-click="login(userName)"]')).click();

    expect(element(by.binding('getLevel().name')).getText()).toBe('Guldrun Banan');
    expect(element(by.id('logout-link')).isPresent()).toBe(true);

    element(by.id('logout-link')).click();
  });

  it('Det ska gå att logga ut. När man loggar ut försvinner logout-länk och level 1 namnet återgår till standard' +
    ' ("Sven Banan")', function () {

    element(by.model('userName')).sendKeys('Guldrun');
    element(by.css('button[ng-click="login(userName)"]')).click();


    element(by.id('logout-link')).click();

    expect(element(by.binding('getLevel().name')).getText()).toBe('Sven Banan');
    expect(element(by.id('logout-link')).isPresent()).toBe(false);
  });
});