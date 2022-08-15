const AxeBuilder = require('@axe-core/webdriverjs');
const WebDriver = require('selenium-webdriver');

const driver = new WebDriver.Builder().forBrowser('chrome').build();

driver.get('https://dequeuniversity.com/demo/mars/').then(() => {
  new AxeBuilder(driver).analyze((err, results) => {
    if (err) {
      // Handle error somehow
    }
    console.log(results);
    console.log(results.violations);
  });
});