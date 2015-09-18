'use strict'

describe('Det ska finnas en lista med grekiska aktiviteter', function () {

  it('Det ska finnas minst 1 aktivitet i listan', function () {
    expect(element.all(by.repeater('activity in activities')).count()).toBeGreaterThan(0);
  });

  it('Det ska finnas max 31 aktiviteter', function () {

    var rowCount = 0;
    element.all(by.repeater('activity in activities')).each(function (elements, index) {
      rowCount++;
    }).then(function () {
      expect(rowCount).toBe(31);
    })


  });

  it('Det ska gå att filtrera aktiviteterna i listan', function () {

    //Filtrering i fritextfält.
    //Endast rätt rubriker eller poäng ska finnas med
    //Det ska visas att inga resultat har hittats
    element(by.css('body')).allowAnimations(false);
    element(by.model('search')).sendKeys('DrIck').then(function () {
      element.all(by.repeater('activity in activities')).each(function (elm, index) {
        expect(elm.getText()).toMatch(/drick/i);

      });
    });
  });

})