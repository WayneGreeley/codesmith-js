//Challenge: Loops - Range

function getTheRange(arr){
  
  let high = Number.NEGATIVE_INFINITY
  let low = Number.POSITIVE_INFINITY
  let range = 0
  
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > high){
      high = arr[i]
    }
    if (arr[i] < low){
      low = arr[i]
    }
  }
  return [low,high,high-low]
}

console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]