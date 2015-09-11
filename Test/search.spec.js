/**
 * Created by anders on 15-09-03.
 */

describe('Stavros test in the making', function () {
  it('det ska gå att söka', function () {
    element(by.model('search')).sendKeys("drick")
      .then(function () {
        return browser.sleep(1000); // Wait for animation
      })
      .then(function () {
        element(by.repeater('activity in activities').row(0))
          .element(by.binding('activity.name')).getText()
          .then(function (text) {
            expect(text.toLowerCase()).toContain('drick')
          });
      });
  })
});