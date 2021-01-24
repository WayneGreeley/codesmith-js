//Challenge: getLength

function getLength(array) {
  if(array[0] === undefined){  //(array.length === 0){
    return 0;
  }
  const itm = array.pop()
  return 1 + getLength(array)
}

console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0
