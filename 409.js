//Challenge: defineFirstArg

function defineFirstArg(aFn, arg){
  function returnFn(...args){
    return aFn(arg,...args);
  }
  return returnFn;
}

const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // should log: 15
