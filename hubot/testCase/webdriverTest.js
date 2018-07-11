var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var inter;
var b = 1;
var driver = new webdriver.Builder()
    .forBrowser('chrome').build(); //forBrowser 로 브라우저 설정후 Build
var util = require('util');

driver.get('http://moneybook.naver.com/mybook/write.nhn')
    .then(function() {
        return check_title();
        driver.wait(until.elementLocated(By.id("gnb_login_button")))
    })
    .then(function() {
        console.log('true accept page');
        // driver.sleep(2000);
        return driver.findElement(By.id("gnb_login_button")).click()

        driver.wait(until.elementLocated(By.name("id")));
    })
    .then(function() {
        console.log('true login_page');
        driver.findElement(By.name('id')).sendKeys('jmcreat');
        driver.findElement(By.name('pw')).sendKeys('audcjf90@');
        return driver.findElement(By.xpath("//input[@class='btn_global']")).click();
        driver.wait(until.elementLocated(By.xpath("//a[@class='btn_import']")));
    })
    .then(function() {
        console.log('true login success');
        // driver.sleep(2000);
        return driver.findElement(By.xpath("//a[@class='btn_import']")).click().then(function() {
            driver.sleep(2000);

        });
    })
    .then(function() {
        console.log('true insert popup window');

        driver.getAllWindowHandles()
            .then(function(allhandles) { //호출한 메서드에 대한 데이터
                return driver.switchTo().window(allhandles[1]).then(function() {});
                driver.wait(until.elementLocated(By.xpath("//a[@class='excel_upload']")));
            });
    })
    .then(function() {
        console.log('true switch popup window');
        return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/Users/mac/Downloads/test.xlsx")
            .then(function() {
                console.log(new Date() + 'true excel 파일 업로드 중')

                return driver.findElement(By.xpath("//a[@class='excel_upload']")).click();
            })
    }).then(function() {
        console.log(new Date() + 'start interval')

        inter = setInterval(findnum, 5000);
    })

.catch(function(e) {
    console.error('e =' + e);
    console.log('false');
});

function findnum() {
    console.log('start find num')


    driver.actions().mouseMove(driver.findElement(By.name('XlsUpload')), {
        x: 346,
        y: 380
    }).click()
    .perform()
      .then(function() {
        driver.sleep(2000);


        driver.wait(until.elementLocated(By.id("wrap_pop_h")),5000)
        driver.findElement(By.xpath("//div/h1")).getText()
            .then(function(text) {
                console.log("text..." + text)
                if (text === '사용내역 엑셀 업로드 개선') {
                    console.log(b + "회 만에 버튼 클릭");
                    console.log(new Date() + '가계부 업로드 완료');
                  clearInterval(inter);
                   driver.quit();

                } else {
                    console.log(new Date() + "버튼찾기 시도중" + b + "회 시도중");
                    b++;
                }
            })

    })
}

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
