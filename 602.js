//Challenge: ajaxSimulate

let dataReceived;

function ajaxSimulate(id, callback) {
  const database = ['Aaron', 'Barbara', 'Chris'];
  setTimeout(function(){
    //console.log('printing element '+i)
    callback(database[id]);
    console.log(dataReceived);
  }, 0);
}

function storeData(data){
  dataReceived = data;
}

ajaxSimulate(1,storeData);
console.log(dataReceived);
