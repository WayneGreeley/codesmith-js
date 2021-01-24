//Challenge: reduce

function reduce (arr, callback, initValue){
  let result = initValue;
  for (let i = 0; i<arr.length; i++){
    console.log(i,arr[i],result);
    result = callback(result,arr[i]);
  }
  return result;
}

const nums = [4, 1, 3];
const add = function(a, b) { return a + b; }
console.log(reduce(nums, add, 0)); // should log 8
