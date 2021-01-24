//Challenge: createFunctionWithInput

function createFunctionWithInput(str){
  function newFunction(){
    return str;
  }
  return newFunction;
}

const sampleFunc = createFunctionWithInput('sample');
console.log(sampleFunc()); // should log: 'sample'
const helloFunc = createFunctionWithInput('hello');
console.log(helloFunc()); // should log: 'hello'
