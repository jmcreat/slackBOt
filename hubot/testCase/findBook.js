var webdriver = require('selenium-webdriver'),
  By=webdriver.By,
  until = webdriver.until;
var driver = new webdriver.Builder()
    .forBrowser('chrome').build();
var util = require('util');

driver.get('http://nwllc.sen.go.kr/nwllc_index.jsp')
  .then(function(){
    driver.getAllWindowHandles()
      .then(function(allhandles){
        console.log('allhandles'+allhandles.length)
check_title();

              })

  })
  .then(function(){
    driver.findElement(By.xpath("//input[@name='query']")).click()
    .then(function(text){
      console.log('text11'+text)
    })
    // driver.findElement(By.name('query')).sendKeys('사피엔스');
  })

    // console.log('title : '+ check_title)
    function check_title() {
        var promise = new Promise(function(resolve, reject) {
            driver.getTitle().then(function(title) {
                console.log('title = ' + title);
                resolve();
            }, function(e) {
                reject();
            })
        });
        return promise;
    }
