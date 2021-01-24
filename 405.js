//Challenge: after

function after(num, callback){
  let counter = 0;
  function aFunction(...args){
    counter++;
    if (counter >= num){
      return callback(...args);
    }
  }
  return aFunction;
}

const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);

console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> 'hello world' is printed
