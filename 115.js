//Challenge: Objects - Evaluating Keys

const sumMe = {
    hello: 'there',
    you: 8,
    are: 7,
    almost: '10',
    done: '!'
  };
let total = 0;
  
  
for (const property in sumMe) {
  console.log(`${property}: ${sumMe[property]}`);
  if (typeof(sumMe[property]) === 'number'){
    total += sumMe[property];
  }
}