//Challenge: filterArray

function filterArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i])) 
      newArray.push(array[i]);
  }
  return newArray;
}

const arrOfNums = [1, 2, 3, 4, 5];

function func1(num) {
  return (num % 2 === 0);
}
function func2(num) {
  return (num % 2 === 1);
}

console.log(filterArray(arrOfNums, func1)); // should log: [2, 4]
console.log(filterArray(arrOfNums, func2)); // should log: [1, 3, 5]
