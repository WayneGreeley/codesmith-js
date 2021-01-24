//Challenge: multiMap

function multiMap(array, callbacks) {
  let result = {};
    array.forEach(item => {
      let cbValue = [];
        result[item] = (callbacks.forEach(functback => {
          cbValue.push(functback(item));
        }))
      result[item] = cbValue;
    });
  return result;
}

function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
//const items = ['catfood'];
const items = ['catfood', 'glue', 'beer'];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
