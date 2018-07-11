var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var inter;
var b = 1;
      var i = 0;
var driver = new webdriver.Builder()
    .forBrowser('chrome').build(); //forBrowser 로 브라우저 설정후 Build
var util = require('util');
//http://ticket.cgv.co.kr/Reservation/Reservation.aspx?MOVIE_CD=20013333&MOVIE_CD_GROUP=20013052&PLAY_YMD=20170723&THEATER_CD=0074&PLAY_NUM=5&PLAY_START_TM=1620&AREA_CD=&SCREEN_CD=009
// driver.get('http://ticket.cgv.co.kr/Reservation/Reservation.aspx?MOVIE_CD=20013333&MOVIE_CD_GROUP=20013052&PLAY_YMD=20170725&THEATER_CD=0074&PLAY_NUM=&PLAY_START_TM=&AREA_CD=&SCREEN_CD=009')
function searchData(){
    driver.findElement(By.xpath("//div[@class='area_theater_list nano has-scrollbar']/ul/li[2]")).click()//극장리스트
    // driver.findElement(By.xpath("//div[@class='date-list nano has-scrollbar']/ul/div/li[6]")).getAttribute("class")//attribute 명을 입력하면 정보를 가져올수 있다.
    driver.findElement(By.xpath("//div[@class='date-list nano has-scrollbar']/ul/div/li[7]")).getAttribute("class")//명을 입력하면 정보를 가져올수 있다.
    .then(function(res){
      console.log(res)
      if(res!="day"){
        driver.sleep(1000)
        driver.findElement(By.xpath("//div[@class='date-list nano has-scrollbar']/ul/div/li[7]/a/span[3]")).click()//명을 입력하면 정보 가져온 리스트
        .then(function(){
          driver.sleep(1000)
          driver.findElement(By.xpath("//div[@class='theater']/ul/li[2]")).click()//시간 선택

        })
        console.log("예매를 시작하세요");
      }else{
        reply()
          // i++;//시도 횟수
          // console.log("count : "+i)
      }
    })


}

function reply(){
  setTimeout(function(){
  searchData();
  },2500)
}


driver.get('http://ticket.cgv.co.kr/Reservation/Reservation.aspx?MOVIE_CD=&MOVIE_CD_GROUP=20015721&PLAY_YMD=20180714&THEATER_CD=0013&PLAY_NUM=&PLAY_START_TM=&AREA_CD=&SCREEN_CD=')
// driver.get('http://www.cgv.co.kr/ticket')

  .then(function(){
driver.sleep(4000)

    // driver.findElement(By.xpath("//li[@movie_cd_group='20015673']"))
    // driver.findElement(By.xpath("//div[@movie_cd=20016057]")).getText()
    driver.findElement(By.xpath("//a[@class='button menu3']")).click()
    .then(function(){
      driver.sleep(3000);
      driver.findElement(By.xpath("//div[@class='tabmenu-selectbox SPECIALTHEATER']/ul/li[3]")).click()
    })
    .then(function(res){
      driver.sleep(2000)
      driver.findElement(By.xpath("//li[@movie_cd_group='20015721']")).click()
    })
    .then(function(res){
      driver.sleep(2000)


searchData()

//setIngerval version
      // setInterval(function(){
      //   driver.findElement(By.xpath("//div[@class='area_theater_list nano has-scrollbar']/ul/li[2]")).click()
      //   // driver.findElement(By.xpath("//div[@class='date-list nano has-scrollbar']/ul/div/li[6]")).getAttribute("class")//attribute 명을 입력하면 정보를 가져올수 있다.
      //   driver.findElement(By.xpath("//div[@class='date-list nano has-scrollbar']/ul/div/li[5]")).getAttribute("class")
      //   .then(function(res){
      //     console.log(res)
      //     if(res=="day"){
      //       driver.sleep(1000)
      //       driver.findElement(By.xpath("//div[@class='date-list nano has-scrollbar']/ul/div/li[5]")).click()
      //       .then(function(){
      //         driver.sleep(1000)
      //         driver.findElement(By.xpath("//div[@class='theater']/ul/li[2]")).click()
      //       })
      //       console.log("true")
      //     }
      //   })
      //   i++;
      //   console.log("count : "+i)
      // },2500)


    })
    // .then(function(res){
    //   driver.sleep(2000)
    //   driver.findElement(By.xpath("//li[@theater_cd='0059']")).click()
    // })
    // .then(function(res){
    //   driver.sleep(2000)
    //   driver.findElement(By.xpath("//li[@date='20180425']")).click()
    // })
    // .then(function(res){
    //   driver.sleep(2000)
    //   driver.findElement(By.xpath("//li[@play_start_tm='2040']")).click()
    // })
    //
    //
    // .then(function(res){
    //   driver.sleep(2000)
    //   driver.findElement(By.xpath("//*[@id='tnb_step_btn_right']")).click()
    // })
    // .then(function(res){
    //   console.log(res)
    //   driver.sleep(2000)
    //   driver.findElement(By.xpath("//input[@id='txtUserId']")).sendKeys("jmcreat");
    //   driver.findElement(By.xpath("//input[@id='txtPassword']")).sendKeys("audcjf90!");
    //
    // })
    // .then(function(){
    //   driver.sleep(2000)
    //   driver.findElement(By.xpath("//button[@class='btn_login']")).click()
    // })
    // .then(function(){
    //   driver.sleep(4000)
    //   console.log("test");
    //   driver.findElement(By.xpath("//a[@class='button menu3']")).click()
    // })
    // .then(function(){
    //   driver.sleep(3000);
    //   driver.findElement(By.xpath("//div[@class='tabmenu-selectbox SPECIALTHEATER']/ul/li[4]")).click()
    // })
    // .then(function(res){
    //   driver.sleep(2000)
    //   driver.findElement(By.xpath("//li[@movie_cd_group='20015673']")).click()
    // })
    // .then(function(res){
    //   driver.sleep(2000)
    //   driver.findElement(By.xpath("//li[@theater_cd='0059']")).click()
    // })
    // .then(function(res){
    //   driver.sleep(2000)
    //   driver.findElement(By.xpath("//li[@date='20180425']")).click()
    // })
    // .then(function(res){
    //   driver.sleep(2000)
    //   driver.findElement(By.xpath("//li[@play_start_tm='2040']")).click()
    // })
    // .then(function(res){
    //   driver.sleep(2000)
    //   driver.findElement(By.xpath("//*[@id='tnb_step_btn_right']")).click()
    // })
    // .then(function(){
    //   driver.wait(until.elementLocated(By.xpath("//*[@class='ft_layer_popup popup_alert ko']")))
    //   driver.sleep(2000)
    //   //imax 전용 팝업
    //   // .then(function(){
    //   //   driver.sleep(2000)
    //   //  driver.findElement(By.xpath("//*[@class='ft_layer_popup popup_alert ko'][2]/div[1]/a")).click()
    //   //   })
    //   .then(function(){
    //     driver.sleep(2000)
    //     driver.findElement(By.xpath("//*[@class='ft_layer_popup popup_alert ko'][1]/div[1]/a")).click()
    //   })
    //   .then(function(){
    //     driver.sleep(2000)
    //     driver.findElement(By.xpath("//*[@class='group adult']/ul/li[3]")).click()
    //
    //   })
    //   .then(function(){
    //     driver.sleep(2000)
    //     driver.findElement(By.xpath("//*[@class='group adult']/ul/li[3]")).click()
    //   })
    //   .then(function(){
    //     driver.sleep(3000)
    //     setInterval(function(){
    //     driver.findElement(By.xpath("//a[@class='btn-refresh']")).click()
    //   },3000)
    //
    //   })
    //
    // })
    ///까지
      // .then(function(){
      //   driver.wait(2000)
      //   driver.findElement(By.xpath())
      // })




    // .then(function(){
    //   driver.sleep(10000)
    //   // driver.wait(until.elementLocated(By.xpath("//*[@class='ft_layer_popup popup_alert ko']")))
    //   // driver.findElement(By.xpath("//*[@class='ft_layer_popup popup_alert ko'][1]/div[1]/a")).click()
    //   driver.getAllWindowHandles()
    //   .then(function(allhandles){
    //     console.log("allhandle :"+allhandles)
    //   })
    // })



    // .then(function() {
    //         console.log('true insert popup window');
    //         driver.sleep(4000)
    //         driver.getAllWindowHandles()
    //             .then(function(allhandles) { //호출한 메서드에 대한 데이터
    //               console.log("popup widnw2"+allhandles)
    //                 return driver.switchTo().window(allhandles[1]).then(function() {});
    //                 driver.getTitle();
    //                 driver.wait(until.elementLocated(By.xpath("//a[@class='excel_upload']")));
    //             });
    //           })
    //  driver.wait(until.elementLocated(By.xpath("//li[@play_start_tm='1620']")))
    //  .then(function(){
    //    driver.sleep(2000)
    //   driver.findElement(By.xpath("//li[@play_start_tm='1620']")).click();
    //
    //    })
    // .then(function(){
    //   driver.sleep(2000)
    // driver.findElement(By.xpath("//*[@id='tnb_step_btn_right']")).getText()
    // .then(function(res){
    //   driver.executeScript("OnTnbRightClick()")//function 실행
    //   console.log(res)
    //   // driver.findElement(By.id("tnb_step_btn_right")).click()
    // })
    // // .then(function(allhandles) { //호출한 메서드에 대한 데이터
    // //                 driver.switchTo().window(allhandles[1]).then(function() {});
    // //                 driver.wait(until.elementLocated(By.xpath("//input[@id='txtUserId']")));
    // // })
    // .then(function(){
    //   driver.sleep(2000);
    //   driver.findElement(By.xpath("//input[@id='txtUserId']")).sendKeys("jmcreat");
    //   driver.findElement(By.xpath("//input[@id='txtPassword']")).sendKeys("audcjf90!");
    //   driver.findElement(By.xpath("//button[@class='btn_login']")).click();
    // })
    // .then(function(){
    //   driver.wait(until.elementLocated(By.xpath("//li[@play_start_tm='1620']")))
    //   .then(function(){
    //     driver.sleep(2000)
    //    driver.findElement(By.xpath("//li[@play_start_tm='1620']")).click();
    //
    //     })
    // })
    // })

  })
// driver.get('http://moneybook.naver.com/mybook/write.nhn')
//     .then(function() {
//         return check_title();
//         driver.wait(until.elementLocated(By.id("gnb_login_button")))
//     })
//     .then(function() {
//         console.log('true accept page');
//         // driver.sleep(2000);
//         return driver.findElement(By.id("gnb_login_button")).click()
//
//         driver.wait(until.elementLocated(By.name("id")));
//     })
//     .then(function() {
//         console.log('true login_page');
//         driver.findElement(By.name('id')).sendKeys('jmcreat');
//         driver.findElement(By.name('pw')).sendKeys('audcjf90@');
//         return driver.findElement(By.xpath("//input[@class='btn_global']")).click();
//         driver.wait(until.elementLocated(By.xpath("//a[@class='btn_import']")));
//     })
//     .then(function() {
//         console.log('true login success');
//         // driver.sleep(2000);
//         return driver.findElement(By.xpath("//a[@class='btn_import']")).click().then(function() {
//             driver.sleep(2000);
//
//         });
//     })
//     .then(function() {
//         console.log('true insert popup window');
//
//         driver.getAllWindowHandles()
//             .then(function(allhandles) { //호출한 메서드에 대한 데이터
//                 return driver.switchTo().window(allhandles[1]).then(function() {});
//                 driver.wait(until.elementLocated(By.xpath("//a[@class='excel_upload']")));
//             });
//     })
//     .then(function() {
//         console.log('true switch popup window');
//         return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/Users/mac/Downloads/test.xlsx")
//             .then(function() {
//                 console.log(new Date() + 'true excel 파일 업로드 중')
//
//                 return driver.findElement(By.xpath("//a[@class='excel_upload']")).click();
//             })
//     }).then(function() {
//         console.log(new Date() + 'start interval')
//
//         inter = setInterval(findnum, 5000);
//     })
//
// .catch(function(e) {
//     console.error('e =' + e);
//     console.log('false');
// });
//
// function findnum() {
//     console.log('start find num')
//
//
//     driver.actions().mouseMove(driver.findElement(By.name('XlsUpload')), {
//         x: 346,
//         y: 380
//     }).click()
//     .perform()
//       .then(function() {
//         driver.sleep(2000);
//
//
//         driver.wait(until.elementLocated(By.id("wrap_pop_h")),5000)
//         driver.findElement(By.xpath("//div/h1")).getText()
//             .then(function(text) {
//                 console.log("text..." + text)
//                 if (text === '사용내역 엑셀 업로드 개선') {
//                     console.log(b + "회 만에 버튼 클릭");
//                     console.log(new Date() + '가계부 업로드 완료');
//                   clearInterval(inter);
//                    driver.quit();
//
//                 } else {
//                     console.log(new Date() + "버튼찾기 시도중" + b + "회 시도중");
//                     b++;
//                 }
//             })
//
//     })
// }
//
// function check_title() {
//     var promise = new Promise(function(resolve, reject) {
//         driver.getTitle().then(function(title) {
//             console.log('title = ' + title);
//             resolve();
//         }, function(e) {
//             reject();
//         })
//     });
//     return promise;
// }
