//Challenge: Booleans: Comparison Operators

// 1.
const small = 2;
const large = 5342;
const isSmaller = small < large

// 2.
const num = 45;
const string = "45";
const isLooselyEqual = (num == string)
const isStrictlyEqual = (num === string)


// 3.
const isTrue = true;
const isFalse = false;
const isTrueNotFalse = (isTrue !== isFalse)

console.log('Is 2 < 5342?');
console.log(isSmaller);
console.log('Is 45 loosely equal to "45"?'); 
console.log(isLooselyEqual);
console.log('Is 45 strictly equal to "45"?');
console.log(isStrictlyEqual);
console.log('Is true not equal to false?');
console.log(isTrueNotFalse);