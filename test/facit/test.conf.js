exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:8080/',
  specs: [
    'lab1.spec.js',
    'lab2.spec.js',
    'aktiviteter.spec.js',
    'inloggning.spec.js',
    'level.spec.js',
    'listan.spec.js',
    'search.spec.js'
  ],
  multiCapabilities: [
    {
      browserName: 'chrome'
    },
    {
      browserName: 'firefox'
    }
  ],
  jasmineNodeOpts: {
    isVerbose: true,
    defaultTimeoutInterval: (2 * 60 * 1000)
  },
  onPrepare: function () {
    browser.driver.manage().window().setSize(500, 1000);
    return browser.get('http://localhost:8080'); // Added return statement here
  }
};
