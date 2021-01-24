//Challenge: Using forEach

function droids(arr) {
  let result = '';

  arr.forEach((item,index,array) => {console.log(item,index);
    if (arr[index] === 'Droids'){
        result = 'Found Droids!'
    }
  });

  return result;
}

const starWars = ["Luke", "Finn", "Rey", "Kylo", "Droids"] 
const thrones = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"] 
console.log(droids(starWars)) // should log: "Found Droids!"
console.log(droids(thrones)) //should log: "These are not the droids you're looking for."