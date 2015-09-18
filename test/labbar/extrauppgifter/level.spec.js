'use strict';

describe('Användaren ska kunna se sin progress mot att bli en fulländad Stavros', function () {

  /**
   * Återställer poängen mellan testerna
   */
  beforeEach(function () {
    element(by.css('button[ng-click="clearSelected()"]')).click();
    expect(element(by.binding('getScore()')).getText()).toBe('0');
  });

  it('0 poäng ger level Sven Banan', function () {
    // TODO
  });

  it('10 poäng ger level SunTrip Champ', function () {
    // TODO
  });

  it('Olika levels ska ha olika bilder', function () {
    // TODO
  });
});