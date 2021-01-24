//Challenge: Repeater

console.log('Hello, world!');
let output = '';
function repeater(char) {
  //console.log(str);
  //if(!str.includes(char)){
  //  str = char;
  //}
  if (output.length === 5){
    return output;
  }
  output += char;
  return repeater(char);
}

console.log(repeater('g'));
console.log(repeater('j'));
