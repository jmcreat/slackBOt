var exec = require('child_process').exec;

child = exec('./startHubot.sh',function(error,stdout,stderr)
{
  console.log('stdout'+stdout);
  console.log('stderr'+stderr);
  if(error !==null){
    console.log('exec error + errorad');
  }

});
