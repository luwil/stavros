describe('Stavros test in the making', function () {
  /**
   * Nollställer poängen mellan testerna
   */
  beforeEach(function () {
    browser.get('http://localhost:8080');
    element(by.css('button[ng-click="clearSelected()"]')).click();
    expect(element(by.binding('getScore()')).getText()).toBe('0');
  });

  it('det ska gå att söka', function () {
    element(by.model('search')).sendKeys("drick");
    browser.sleep(2000); // Let animation complete
    expect(element(by.repeater('activity in activities')).getText())
      .toMatch(/drick/i);
  });
});
