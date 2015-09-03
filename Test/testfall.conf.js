/**
 * Created by anders on 15-09-03.
 */
exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    baseUrl: 'http://52.21.171.99/stavros/',
    specs: ['sokning.spec.js'],
    capabilities: {
        browserName: 'chrome'
    },
    //rootElement: 'div#StavrosCtrl',

    onPrepare: function() {
        browser.driver.manage().window().maximize();
        return browser.get('http://52.21.171.99/stavros/'); // Added return statement here
    }

}
