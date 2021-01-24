//Challenge: map

const subtractTwo = a => a-2;

function map (arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(subtractTwo(arr[i]));
  }
  return result;
}

console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]