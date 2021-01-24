//Challenge: cycleIterator

function cycleIterator(arr){
  let counter = 0;
  function returnFn(){
    if (counter>=arr.length){
      counter = 0;
    }
    counter++;
    return arr[counter-1];
  }
  return returnFn;
}

const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'
