//Challenge: saveOutput

function saveOutput(aFn, password){
  let cache = {};
  function returnFn(value){
    if (value === password){
      return cache;
    }
    const result = aFn(value);
    cache[value] = result;
    return result;
  }
  return returnFn;
}

const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog('boo')); // should log: { 2: 4}
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }
