//Challenge: dateStamp

function dateStamp(aFn){
  function returnFn(...args){
    let result = {}
    let myDate = new Date().toDateString(); //toLocaleDateString("en-US");
    let value = aFn(...args);
    result['date'] = myDate;
    result['output'] = value;
    return result;
  }
  return returnFn;
}

const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }
