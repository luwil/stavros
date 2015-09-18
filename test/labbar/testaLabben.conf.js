exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://52.21.171.99/stavros/',
  specs: ['listan.spec.js'],
  capabilities: {
    browserName: 'chrome'
  },
  //rootElement: 'div#StavrosCtrl',

  onPrepare: function () {
    browser.driver.manage().window().setSize(500, 800);
    return browser.get('http://52.21.171.99/stavros/'); // Added return statement here
  }

};

