var exec = require('child_process').exec;
var stop;
const fs = require('fs');

const testFolder = 'testCase';
var array = [];



function startChild(startFile){
return new Promise(function(resolve, reject) {
console.log

console.log('bot관리 목록 실행')
child = exec('node '+startFile+'.js',function(error,stdout,stderr)
{
  console.log('stdout'+stdout);
  console.log('stderr'+stderr);
  resolve(stdout);
  if(error !==null){
    console.log('exec error + errorad');
    reject();
  }

});
});
}



// function startChild(){
// return new Promise(function(resolve, reject) {
//
// console.log('bot관리 목록 실행')
// child = exec('node testCase/ranking.js',function(error,stdout,stderr)
// {
//   console.log('stdout'+stdout);
//   console.log('stderr'+stderr);
//   resolve(stdout);
//   if(error !==null){
//     console.log('exec error + errorad');
//     reject();
//   }
//
// });
// });
// }

function startMovieSearch(){
return new Promise(function(resolve, reject) {

console.log('bot관리 목록 실행')
child = exec('node testCase/testEnt.js',function(error,stdout,stderr)
{
  console.log('stdout'+stdout);
  console.log('stderr'+stderr);
  resolve(stdout);
  if(error !==null){
    console.log('exec error + errorad');
    reject();
  }

});
});
}


//robot hear
module.exports = function(robot){
  console.log('robot'+robot)
   robot.hear(/naver/, function(msg) {
    console.log('msg');
     return msg.send("http://datalab.naver.com/keyword/realtimeList.naver?where=main");
});

   robot.hear(/bit/, function(msg){
     startChild().then(function(bitValue){
       console.log('bitvalue : '+bitValue)
       return msg.send(bitValue);
     });

    stop=setInterval(function(){
    startChild().then(function(bitValue){
      console.log('bitvalue : '+bitValue)
      return msg.send(bitValue);
    });

  },15000)//setInterval
  });

  robot.hear(/bitstop/,function(msg){
    clearInterval(stop);
    msg.send('bitbot 이 멈췄습니다.')
  });

  robot.hear(/movie/,function(msg){
    startMovieSearch().then(function(value){
      console.log('movie value : '+ value)
      msg.send('좌석을 예매하세요.'+value)
    })

  });

}
