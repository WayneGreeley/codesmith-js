//Challenge: Control Flow - if statements

const num = 40;
let final;

if (num > 100) {
    console.log("This shouldn't log");
    final = null;
} else if (4 > 2) {
    console.log("This should log"); // 'This should log'
    final = num*2
}