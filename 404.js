//Challenge: once

function once(callback){
  let result = null;
  function aFunction(...args){
    if (result === null){
      result = callback(...args);
    }
    return result;
  }
  return aFunction;
}

const addByTwoOnce = once(function(num) {
  return num + 2;
});

console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7
