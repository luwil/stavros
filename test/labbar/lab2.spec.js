'use strict';
describe('Lab 2', function () {

  /**
   * Nollställer poängen mellan testerna
   */
  beforeEach(function () {
    element(by.css('button[ng-click="clearSelected()"]')).click();
    expect(element(by.binding('getScore()')).getText()).toBe('0');
  });

  it('Aktiviteterna ska vara poängsatta, testa genom att bocka för alla aktiviteter och kontrollera att totalpoängen' +
    ' blir 86.', function () {
  });

  it('Det ska gå att logga in med namn. När man loggar in som "Sune" kommer namnet för' +
    ' LEVEL 1 bli "Sune Banan" och dessutom visas logout-länk.', function () {
  });
});