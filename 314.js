//Challenge: countBy

function countBy (arr, callback) {
  let result = {};
  
  arr.forEach(item => {
    let value = callback(item);
    if (result[value] !== undefined){
      result[value]++;
    } else {
      result[value] = 1;
    }
  });
  return result;
}

function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  else return 'odd';
}
const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }
