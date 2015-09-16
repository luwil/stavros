describe('Locators', function () {
  it('should support locating elements by id', function () {
    expect(element(by.id('score')).getText()).toBe('0');
  });

  it('should support locating elements by class', function () {
    expect(element(by.className('level-current')).getText()).toBe('Sven Banan');
  });

  it('should support locating elements by css selector', function () {
    expect(element(by.css('button[ng-click="clearSelected()"]')).getText()).toBe('Rensa alla valda');
  });

  it('should support locating elements by Angular binding', function () {
    expect(element(by.binding('getLevel().name')).getText()).toBe('Sven Banan');
  });

  it('should support locating elements by Angular model', function () {
    element(by.model('userName')).sendKeys('Otto');
    element(by.css('button[ng-click="login(userName)"]')).click();
    expect(element(by.binding('getLevel().name')).getText()).toBe('Otto Banan');
  });

  it('should support locating elements by Angular repeater', function () {
    expect(element.all(by.repeater('activity in activities')).count()).toBe(31);
  });
});
