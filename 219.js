//Challenge: multiplyAll

function multiplyAll(...args) {
  let product = 1;
  args.forEach((num) => {
    product *= num;
  });
  return product;
}

console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
console.log(multiplyAll(5, 5, 5, 3)) // should log: 375