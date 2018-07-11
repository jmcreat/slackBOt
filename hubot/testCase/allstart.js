const fs = require('fs');
const testFolder = '.';
var array = [];

function startAll() {
  return new Promise(function(resolve, reject) {
    fs.readdir(testFolder, (err, files) => {
      files.forEach(file => {
        array.push(file)
        // console.log(file)
      })

      resolve(array)
    })
  });
}

// setTimeout(function(){
//   console.log(array)
// },1000)

startAll()
  .then(function(res) {
    console.log(res)
  })
