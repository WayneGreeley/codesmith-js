//Data Types

// String
const name = "Kyle"; // <= quotes tell us this is a string
console.log(name.length);

// Number
const favNum = 17;

// Boolean
const iLoveCoding = true; // <= no quotes
const iLoveBeets = false;

// Null
const blackHole = null;

// Undefined
let address; // here we declared the variable, 
             // but never gave it a value, so 
             // it is Undefined

console.log(address === undefined);

// Object
const person = {
  name: "Bart Simpson",
  dob: "02/23/88", 
  weight: 65,
  hairColor: "blonde" 
}

// Array
const fruits = ["apples", "oranges", "pears", "bananas"];
const myArray = [21, "pear", [3, 7, 22], { objectsToo: true }];

console.table(myArray);
