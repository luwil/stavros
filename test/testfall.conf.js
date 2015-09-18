/**
 * Created by anders on 15-09-03.
 */
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:8080/',
  specs: ['facit/xp.spec.js'],
  capabilities: {
    browserName: 'firefox'
  },
  //rootElement: 'div#StavrosCtrl',

  onPrepare: function () {
    browser.driver.manage().window().setSize(500, 800);
    return browser.get('http://localhost:8080'); // Added return statement here
  }

};
