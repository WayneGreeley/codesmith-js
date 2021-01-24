//Challenge: POW

function pow(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * pow(base,exponent-1);
}

console.log(pow(2, 4)); // -> 16
console.log(pow(3, 5)); // -> 243
