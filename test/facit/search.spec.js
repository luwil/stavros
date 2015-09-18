describe('Stavros test in the making', function () {
  /**
   * Nollställer poängen mellan testerna
   */
  beforeEach(function () {
    element(by.css('button[ng-click="clearSelected()"]')).click();
    expect(element(by.binding('getScore()')).getText()).toBe('0');
  });

  it('det ska gå att söka', function () {
    element(by.model('search')).sendKeys("drick");
    browser.sleep(2000); // Let animation complete
    expect(element.all(by.repeater('activity in activities')).get(0))
      .toMatch(/drick/i);
  })
});
