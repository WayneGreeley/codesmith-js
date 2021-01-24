//Challenge: groupBy

function groupBy (arr, callback) {
  let result = {};
  
  arr.forEach(item => {
    let value = callback(item);
    
    if (result[value] !== undefined){
      result[value].push(item);
    } else {
      result[value] = [item];
    }
  });
  return result;
}

const decimals = [1.3, 2.1, 2.4];
const floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
