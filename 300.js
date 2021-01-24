//Challenge: pluralize

function pluralize (arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] + 's');
  }
  return result;
}

const animals = ["dog", "cat", "tree frog"];
console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]