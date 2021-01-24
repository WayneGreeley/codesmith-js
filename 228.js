//Challenge: findWaldo

function findWaldo(arr) {
  let str = "Where's Waldo?"
  
  for (const property in arr) {
    console.log(`${property}: ${arr[property]}`);
    if (property === 'Waldo'){
      str= arr[property];
    }
  }
  return str;
}

const DC = {'Bruce': 'Wayne', 'Harley': 'Quinn'}
const supernatural = {'Sam': 'Winchester', 'Dean': 'Winchester', 'Waldo': 'unknown'}
console.log(findWaldo(DC)) // should log: 'Where's Waldo?'
console.log(findWaldo(supernatural)) // should log: 'unknown'