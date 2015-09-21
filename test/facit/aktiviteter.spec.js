'use strict';

var util = require('./util');

describe('Hantering av aktiviteter', function () {

  beforeEach(function () {
    browser.get('http://localhost:8080');
    element(by.css('button[ng-click="clearSelected()"]')).click();
    expect(element(by.binding('getScore()')).getText()).toBe('0');
  });

  it('skall kunna bocka för aktiviteter och då skall totalpoängen öka, t.ex om man bockar i "Ät patsas" så skall' +
    ' poängen bli 5.', function () {
    element.all(by.repeater('activity in activities'))
      .filter(function (element) {
        return element.getText().then(function (text) {
          return text.match(/Ät patsas/);
        })
      })
      .then(function (filteredElements) {
        expect(filteredElements.length).toBe(1);
        var foundElement = filteredElements[0];
        util.scrollToTop()
          .then(function () {
            foundElement.element(by.className('activity-btn')).click();
            expect(element(by.binding('getScore()')).getText()).toBe('5');
          });
      });
  });

  it('Aktiviteterna ska vara poängsatta, t.ex totalpoängen skall bli 86 om alla är förbockade.', function () {
    element.all(by.repeater('activity in activities'))
      .each(function (rowElement) {
        util.scrollToTop()
          .then(function () {
            rowElement.element(by.className('activity-btn')).click();
          });
      });
    expect(element(by.binding('getScore()')).getText()).toBe('86');
  });

  it('Det ska gå att avbocka aktiviteter som domarna dömmer bort, d.v.s om man trycker "Rensa alla"-knappen så' +
    ' avbockas alla aktiviteter och totalpoängen blir 0.', function () {
    element.all(by.repeater('activity in activities'))
      .each(function (element) {
        util.scrollToTop()
          .then(function () {
            element.element(by.className('activity-btn')).click();
          });
      });
    element(by.css('button[ng-click="clearSelected()"]')).click();
    element.all(by.repeater('activity in activities'))
      .each(function (element) {
        expect(element.element(by.className('glyphicon-ok')).isPresent()).toBe(false);
      });
    expect(element(by.binding('getScore()')).getText()).toBe('0');
  });

  it('Aktiviteterna ska ha ett namn som innehåller minst en bokstav.', function () {
    element.all(by.repeater('activity in activities'))
      .each(function (element) {
        expect(element.element(by.binding('activity.name')).getText()).toMatch(/[A-ZÅÄÖa-zåäö]+/);
      });
  });

  it('Aktiviteterna ska ha en passande bild kopplad till sig, t.ex att det finns en bild med URL som pekar in i img/' +
    ' knuten till varje aktivitet.', function () {
    element.all(by.repeater('activity in activities'))
      .each(function (element) {
        expect(element.element(by.className('activity-thumbnail')).getAttribute('src')).toMatch(/[img\/]/);
      });
  });

  it('Bilderna till aktiviteterna ska gå att förstora. När man klickar på bilden skall en bild med css-klassen' +
    ' "full-width-image" visas.', function () {
    expect(getFullWidthImage().isPresent()).toBe(false);
    getActivityThumbnailImage().click();
    expect(getFullWidthImage().isPresent()).toBe(true);
    getActivityThumbnailImage().click();
    expect(getFullWidthImage().isPresent()).toBe(false);

    function getActivityThumbnailImage() {
      return element.all(by.repeater('activity in activities')).get(0).element(by.className('activity-thumbnail'));
    }

    function getFullWidthImage() {
      return element.all(by.repeater('activity in activities')).get(0).element(by.className('full-width-image'));
    }
  });

});
