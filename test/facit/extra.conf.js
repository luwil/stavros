exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://localhost:8080/',
    specs: [
      'inloggning.spec.js',
      'level.spec.js',
      'listan.spec.js',
      'aktiviteter.spec.js',
      'search.spec.js'
    ],
    capabilities: {
        browserName: 'firefox'
    },
    jasmineNodeOpts: {
        isVerbose:true,
        defaultTimeoutInterval: (2 * 60 * 1000)
    },
    onPrepare: function() {
        browser.driver.manage().window().setSize(500,800);
        return browser.get('http://localhost:8080'); // Added return statement here
    }
};
