//Challenge: goodKeys

function goodKeys (obj, callback) {
  let result = [];
  
  for (const property in obj) {
    if(callback(obj[property])){
      result.push(property);
    }
  }
  return result;
}

const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
