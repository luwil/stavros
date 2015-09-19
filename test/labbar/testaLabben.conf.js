exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://localhost:8080/',
    specs: ['listan.spec.js'],
    capabilities: {
        browserName: 'firefox'
    },

    onPrepare: function() {
        browser.driver.manage().window().maximize();
        return browser.get('http://localhost:8080/'); // Added return statement here
    }

};
