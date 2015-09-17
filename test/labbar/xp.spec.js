'use strict';

describe('Användaren ska kunna se sin progress mot att bli en fulländad Stavros', function () {
  it('Äta vrokmiko ger 2 StavrosPoints', function () {

  });

  // TODO: ta bort och ersätta med ovanstående?
  //it('Avklarade aktiviteter ska ge StavrosPoints',function(){
  //
  //});


  it('0 poäng ger level Sven Banan', function () {

  });

  it('10 poäng ger level Sun Trip Champ', function () {

  });

  // TODO: ta bort och ersätta med ovanstående två?
  //it('Olika levels ska ha olika benämningar', function(){
  //
  //});

  it('Olika levels ska ha olika bilder', function () {

  });

  // TODO: ta bort och ersätta med ovanstående?
  //it('Olika levels ska ha lämpliga bilder som symboliserar den uppnådda leveln', function () {
  //
  //});

  it('Det ska gå att rensa alla aktiviteter och StavrosPoints för att det är kul att börja om', function () {
    // Assert init
    expect(element(by.id('score')).getText()).
      toEqual('0');

    // Setup
    var activity1 = element(by.repeater('activity in activities').row(0));
    activity1.element(by.className('activity-btn')).click();

    // Assert setup
    expect(element(by.id('score')).getText()).
      toEqual('2');

    // Do test
    element(by.buttonText('Rensa alla valda')).click();

    // Assert test
    expect(element(by.id('score')).getText()).
      toEqual('0');
  });

});