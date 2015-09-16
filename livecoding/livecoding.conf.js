exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    baseUrl: 'http://localhost:8080/',

    specs: ['*.spec.js'],

    capabilities: {
        browserName: 'chrome'
    },

    jasmineNodeOpts: {
      isVerbose: true
    },

    onPrepare: function() {
        browser.driver.manage().window().setSize(500,500);
        return browser.get('http://localhost:8080'); // Added return statement here
    }

};
