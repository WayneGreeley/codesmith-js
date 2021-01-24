//Challenge: intersection

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

function contains (array1, array2){
  console.log(array1, array2);
  if(array2 === undefined){
    return array1;
  }
  let result = []
  array1.forEach((num) => {
    //console.log('arr',arr);
    if (array2.includes(num)){
      result.push(num);  
    }
  });
  return result
}

function intersection(args) {
  return reduce(args,contains);
}

const arr1 = [5, 10, 15, 20];
console.log(arr1.includes(3))
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
const arr4 = [1, 10, 15];
console.log(intersection([arr1, arr2, arr3, arr4])); // should log: [5, 15]
