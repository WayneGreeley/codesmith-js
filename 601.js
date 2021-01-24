//Challenge: forEach

console.log('I am at the beginning of the code');

function forEach(arr, cb){
  arr.forEach((item,i,array) => {
    cb(item,i);
  });
}

function delayLog(delayTime,i){
  setTimeout(function(){
    console.log('printing element '+i)
  }, delayTime);
}

const delays = [200, 500, 0, 350];

forEach(delays, delayLog);

console.log('I am at the end of the code')
