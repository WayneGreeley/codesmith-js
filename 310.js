//Challenge: arrToObj

function arrToObj(array, callback) {
  let result = {};
  
  array.forEach((item,i,array) => {
    result[item] = callback(item);
  });
  console.log(result);
  return result;
}

const arrOfStrings = ['beer', 'glue'];
const capitalize = str => str.toUpperCase();
console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }
