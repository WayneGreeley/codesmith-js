//Challenge: Factorial

function factorial(num) {
	if(num === 0){
    return 1;
  }
  return (num * factorial(num-1));
}

console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720
console.log(factorial(0)); // -> 1
