//Challenge: objOfMatches

function objOfMatches (array1, array2, callback){
  let result = {};
  
  array1.forEach((item,i,array) => {
    if(array2[i] === callback(item)){
        console.log(item,i,array2[i],callback(item));
      result[item] = array2[i];
    }
  });
  console.log(result);
  return result;
}

const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) { return str.toUpperCase(); }
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }
