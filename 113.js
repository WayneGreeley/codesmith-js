//Challenge: Objects - Nested Arrays

const nestedArr = [];

for (let i = 0; i < 5; i++){
  let subArr = [];
  subArr.push('loop'+i, i);
  nestedArr.push(subArr);
}
console.log(nestedArr);