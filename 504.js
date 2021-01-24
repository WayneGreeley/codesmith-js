//Challenge: flow

function flow2(input, funcArray) {
  if(funcArray.length === 0){ // //funcArray[0]===undefined
    return input;
  }
  const itm = funcArray.shift()
  //console.log(input,itm,itm(input));
  return flow(itm(input),funcArray);
}
function flow(input, funcArray) {
  if(funcArray.length === 0){ // //funcArray[0]===undefined
    return input;
  }
  const output = funcArray[0](input);
  //console.log(input,itm,itm(input));
  return flow(output,funcArray.slice(1));
}

function multiplyBy2(num) { return num * 2; }
function add7(num) { return num + 7; }
function modulo4(num) { return num % 4; }
function subtract10(num) { return num - 10; }
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
console.log(flow(2, arrayOfFunctions)); // -> -7
