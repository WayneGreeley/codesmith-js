//Challenge: Loops - Multiple Conditions

function addingAllTheWeirdStuff(array1, array2){
  
  let sumOfOddNumsInArray2 = 0
  let sumOfEvenNumsInArray2 = 0
  let above20 = false;
  for (let i=0;i<array2.length; i++){
    if (array2[i] % 2 === 1){
      sumOfOddNumsInArray2 += array2[i];
    }
    if (array2[i] % 2 === 0){
      sumOfEvenNumsInArray2 += array2[i];
    }
    if (array2[i] > 20){
          above20 = true;
    }
  }
  
  console.log('sumOfOddNumsInArray2',sumOfOddNumsInArray2);
  console.log('sumOfEvenNumsInArray2',sumOfEvenNumsInArray2);
  
  for (let j=0;j<array1.length; j++){
    if (array1[j] < 10){
      array1[j] += sumOfOddNumsInArray2;
    } else if (array1[j] > 10){
      array1[j] += sumOfEvenNumsInArray2;
    }
    if (above20){
      array1[j]++;
    }
  }
  return array1;
}

console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
