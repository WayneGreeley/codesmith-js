//Challenge: Objects - Examining Properties

const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
};

let found = 0;

const object = { a: 1, b: 2, c: 3 };

for (const property in checkObj) {
    console.log(`${property}: ${checkObj[property]}`);
    if(property === 'foundNum'){
        found = 1;
    }
}