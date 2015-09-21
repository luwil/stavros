module.exports = {
  scrollToTop: function () {
    return browser.driver.executeScript("window.scrollTo(0,0);");
  }
};