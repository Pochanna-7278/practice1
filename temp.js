const { Builder, By } = require('selenium-webdriver');

(async function () {
  const inputs = [
    [1, 2],
    [2, 3],
    [4, 5]
  ];

  for (let [a, b] of inputs) {
    const driver = await new Builder().forBrowser('chrome').build();

    await driver.get("http://localhost:8020");
    //await driver.get("file://" + __dirname + "/class.html");

    await driver.findElement(By.id('num1')).sendKeys(a.toString());
    await driver.findElement(By.id('num2')).sendKeys(b.toString());
    await driver.findElement(By.id('btn')).click();

    await driver.sleep(500); // give time for UI to update

    const result = await driver.findElement(By.id('res')).getAttribute('value');
    console.log(`Result of ${a} + ${b} = ${result}`);

    await driver.quit();
  }
})();
