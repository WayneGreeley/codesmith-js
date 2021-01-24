//Challenge: delay

//setTimeout(function(){ alert("Hello"); }, 3000);

function delay(callback, waitTime){
  function aFunction(...args){
    setTimeout(function(){ 
      callback(...args);
    }, waitTime);
  }
  return aFunction;
}

let count = 0;
const delayedFunc = delay(() => count++, 1000);
delayedFunc();
console.log(count); 												 // should print '0'
setTimeout(() => console.log(count), 1000); // should print '1' after 1 second
