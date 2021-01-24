//Challenge: addByX

function addByX(num){
  function aFunction(input){
    return input+num;
  }
  return aFunction;
}

const addByTwo = addByX(5);

console.log(addByTwo(1));
console.log(addByTwo(2));
