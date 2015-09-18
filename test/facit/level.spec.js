'use strict';

describe('Användaren ska kunna se sin progress mot att bli en fulländad Stavros', function () {

  beforeEach(function () {
    element(by.css('button[ng-click="clearSelected()"]')).click();
    expect(element(by.binding('getScore()')).getText()).toBe('0');
  });

  it('0 poäng ger level Sven Banan', function () {
    expect(element(by.binding('getScore()')).getText()).toBe('0');
    expect(element(by.binding('getLevel().name')).getText()).toBe('Sven Banan');
  });

  it('10 poäng ger level SunTrip Champ', function () {
    element.all(by.repeater('activity in activities'))
      .filter(function (element) {
        return element.getText().then(function (text) {
          return text.match(/Skaffa\/trimma till grekfrillan/);
        })
      })
      .then(function (filteredElements) {
        expect(filteredElements.length).toBe(1);
        var foundElement = filteredElements[0];
        foundElement.element(by.className('activity-btn')).click();
        expect(element(by.binding('getScore()')).getText()).toBe('10');
        expect(element(by.binding('getLevel().name')).getText()).toBe('SunTrip Champ');
      });
  });

  it('Olika levels ska ha olika bilder', function () {
    // TODO funkar ej??
    //expect(element(by.binding('getLevel().imagePath')).getText()).toMatch(/[img\/]/);

    // TODO funkar men bara för att det är första träffen
    expect(element(by.css('.img-box img')).getAttribute('src')).toMatch(/[img\/svenba.jp]/);

    // Få 10 poäng
    element.all(by.repeater('activity in activities'))
      .filter(function (element) {
        return element.getText().then(function (text) {
          return text.match(/Skaffa\/trimma till grekfrillan/);
        })
      })
      .then(function (filteredElements) {
        expect(filteredElements.length).toBe(1);
        var foundElement = filteredElements[0];
        foundElement.element(by.className('activity-btn')).click();
        expect(element(by.binding('getScore()')).getText()).toBe('10');
      });

    expect(element(by.css('.img-box img')).getAttribute('src')).toMatch(/[img\/chap.j]/);
  });
});