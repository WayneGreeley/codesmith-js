//Challenge: prioritize

function prioritize (arr, callback) {
  let priority = [];
  let notpriority = [];
  
  arr.forEach(item => {
    if(callback(item)){
      priority.push(item);
    } else{
      notpriority.push(item);
    }
  });
  return priority.concat(notpriority);
}

function startsWithS(str) { return str[0].toLowerCase() === 's'; }
const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']
