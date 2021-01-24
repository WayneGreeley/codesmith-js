//Challenge: Objects - Adding Properties

const possibleIterable = [4, 3, 9, 6, 23];
const divByThree = {};

for (let i =0; i < possibleIterable.length; i++){
  if (possibleIterable[i] % 3 === 0){
    divByThree[possibleIterable[i]] = i;
  }
}

console.log(divByThree);