//Challenge: disemvowel

function disemvowel(string) {
  
  let str = '';
  for (let i=0; i< string.length;i++){
    let upperI = string[i].toUpperCase();
    if (upperI !== "A" && upperI !== "E" && upperI !== "I" && upperI !== "O" && upperI !== "U"){
      str += string[i];  
    }
  }
  return str;
}

console.log(disemvowel('CodeSmith')); // => 'CdSmth'
console.log(disemvowel('BANANA')); // => 'BNN'
console.log(disemvowel('hello world')); // => 'hll wrld'