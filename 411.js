//Challenge: censor

function censor(){
  let values = {};
  function returnFunction(...args){
    let str = undefined;
    if(args.length === 2){
      values[args[0]] = args[1];
    }
    if(args.length === 1){
      str = args[0];
      for (const property in values) {
        str = str.replaceAll(property, values[property]);
      }
    }
    return str;
  }
  return returnFunction;
}

const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'
