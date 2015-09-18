'use strict';

describe('Hantering av aktiviteter', function () {

  /**
   * Nollställer poängen mellan testerna
   */
  beforeEach(function () {
    element(by.css('button[ng-click="clearSelected()"]')).click();
    expect(element(by.binding('getScore()')).getText()).toBe('0');
  });

  it('skall kunna bocka för aktiviteter och då skall totalpoängen öka, t.ex om man bockar i "Ät patsas" så skall' +
    ' poängen bli 5.', function () {
  });

  it('Aktiviteterna ska vara poängsatta, t.ex totalpoängen skall bli 86 om alla är förbockade.', function () {
  });

  it('Det ska gå att avbocka aktiviteter som domarna dömmer bort, d.v.s om man trycker "Rensa alla"-knappen så' +
    ' avbockas alla aktiviteter och totalpoängen blir 0.', function () {
  });

  it('Aktiviteterna ska ha ett namn som innehåller minst en bokstav.', function () {
  });

  it('Aktiviteterna ska ha en passande bild kopplad till sig, t.ex att det finns en bild med URL som pekar in i img/' +
    ' knuten till varje aktivitet.', function () {
  });

  it('Bilderna till aktiviteterna ska gå att förstora. När man klickar på bilden skall en bild med css-klassen' +
    ' "full-width-image" visas.', function () {
  });

});
