//Sets

let values = [1, 2, 3, 1, 2];

const setVals = new Set(values);
console.log(setVals);

console.log(Array(10)); // [ <10 empty items> ]
console.log([...Array(10)]); 
/*
[
    undefined, undefined,
    undefined, undefined,
    undefined, undefined,
    undefined, undefined,
    undefined, undefined
]
*/
console.log([...Array(10).keys()]);
/*
[
    0, 1, 2, 3, 4,
    5, 6, 7, 8, 9
]
*/

console.log(10000000);
console.log(10e6);
console.log(10_000_000);


let obj = { name: 'Bob' };
let arr = [{ name: 'John' },{ name: 'Jim' }];

// add obj to array of objects
const arr1 = [...arr, obj];

console.log(arr1) // [ { name: 'John' }, { name: 'Jim' }, { name: 'Bob' } ]