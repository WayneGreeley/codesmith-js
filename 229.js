//Challenge: arrayBuilder

function arrayBuilder(obj) {
  
  let arr = []
  
  for (const property in obj) {
    console.log(`${property}: ${obj[property]}`);
    if (typeof(obj[property]) === 'number'){
      for (let i = 0; i<obj[property]; i++){
        arr.push(property)
      }
    }
  }
  return arr;
}

console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); // => []