//Challenge: union

function reduce(array, callback){
  if(Array.isArray(array)){
    let acc = array[0];
    
    array.forEach((arr) => {
      acc = callback(acc,arr);
    });
    
    return acc;
  }
  return [];
}

function unions (array1, array2){
  console.log(array1, array2);
  if(array2 === undefined){
    return array1;
  }
  let result = array1
  array2.forEach((num) => {
    //console.log('arr',arr);
    if (!array1.includes(num)){
      result.push(num);  
    }
  });
  return result
}

function union(args) {
  return reduce(args,unions);
}

const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]
