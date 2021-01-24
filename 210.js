//Challenge: Control Flow - if statements & remainders

function iLoveEvenNumbers(num) {
  if (num % 2 === 0){
    return 'Oh Yeah Evens!'
  }
  return 'I am too normal for odd numbers'
}

console.log(iLoveEvenNumbers(42)); // expected log 'Oh Yeah Evens!'
console.log(iLoveEvenNumbers(17)); // expected log 'I am too normal for odd numbers'
