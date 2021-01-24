//Challenge: Control Flow - if statements and the Math object

function closestToTheMark(player1, player2){
  const theMark = Math.floor(Math.random() * 100)
  console.log(`If theMark is ${theMark}...`);
  
  let player1dist = Math.abs(player1 - theMark);
  let player2dist = Math.abs(player2 - theMark);
  console.log(player1dist);
  console.log(player2dist);
  if (player1dist < player2dist){
  return 'Player 1 is closest' 
  }
  return 'Player 2 is closest' 
}

console.log(closestToTheMark(25, 75));