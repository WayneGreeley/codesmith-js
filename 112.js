//Challenge: Objects - Iterating with for... in

const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
};

const objToArray = [];

for (const property in checkObj) {
    console.log(`${property}: ${checkObj[property]}`);
    if(checkObj[property] >= 2){
        objToArray.push(checkObj[property]);
    }
}