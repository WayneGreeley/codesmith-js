//Challenge: majority

function majority (arr, callback) {
  let totalNum = 0;
  let numTrue = 0;
  
  arr.forEach(item => {
    totalNum++;
    if(callback(item)){
      numTrue++;   
    }
  });
  return (numTrue > (totalNum / 2));
}

const isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false
