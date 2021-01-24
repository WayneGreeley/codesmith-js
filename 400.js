//Challenge: createFunction

function createFunction() {
  function sayHello() {
    return('hello world');
  }
  return sayHello;
}

const myFunction = createFunction();
console.log(myFunction()); //should log: 'hello world'
