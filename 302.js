//Challenge: forEach

function forEach (arr, callBack) {
  let result = [];
  for (let i =0; i< arr.length; i++){
    result.push(callBack(arr[i]));
  }
  return result;
}

function map (arr,callback) {
  return forEach(arr,callback);
}

console.log(typeof forEach); // should log: 'function'
forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]

const subtractTwo = a => a-2;
console.log(map([3,4,5], subtractTwo)); // should log: [1, 2, 3]
