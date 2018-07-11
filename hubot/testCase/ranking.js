var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
const fs = require('fs');
const request = require('request')
const cheerio = require('cheerio');
// var driver = new webdriver.Builder()
//   .forBrowser('chrome').build();
  // .forBrowser('phantomjs').build();//phantomjs version


// cheerio read and write file
request('http://datalab.naver.com/keyword/realtimeList.naver?where=main',function(error,
res,html){
  if(!error && res.statusCode==200){
    // console.log(html);
    const $ = cheerio.load(html);

    $('.rank_list')
    .each(function(i,elem){
      // console.log(i+':'+$(this).text())
      if(i==4){
        // console.log($(this).html().replace(/\n/g, ""))
        console.log('http://datalab.naver.com/keyword/realtimeList.naver')
        console.log('\n 네이버 급상승 검색어 \n')
      }

    })
        // .each(function(i,element){

    // })

    // fs.writeFile('text.html',html,function(err){

    // })
  }
} )
//////////cheerio end


// driver.get('http://datalab.naver.com/keyword/realtimeList.naver?where=main')
//   .then(function(){
//     driver.findElement(By.xpath("keyword_rank select_date")).getText()
//       .then(function(text){
//         console.log('비트코인 : '+text);
//       })
//   })
  // .then(function(){
  //   driver.findElement(By.id("assetRealETH")).getText()
  //     .then(function(text){
  //       console.log('이더리움 : '+text);
  //     })
  // })

  // .then(function(){
  //   driver.quit();
  // })
