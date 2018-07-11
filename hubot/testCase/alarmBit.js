var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;


var driver = new webdriver.Builder()
  .forBrowser('chrome').build();
  // .forBrowser('phantomjs').build();//phantomjs version

driver.get('https://www.bithumb.com/')
  .then(function(){
    driver.findElement(By.id("assetRealBTC")).getText()
      .then(function(text){
        console.log('비트코인 : '+text);
      })
  })
  .then(function(){
    driver.findElement(By.id("assetRealETH")).getText()
      .then(function(text){
        console.log('이더리움 : '+text);
      })
  })

  .then(function(){
    driver.quit();
  })
