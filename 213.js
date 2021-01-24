//Challenge: gradeCalculator

function gradeCalculator(grade) {
    if (grade>=90){
        return 'A' ;
    }  
    if (grade>=0){
        return 'B' ;
    }  
    if (grade>=70){
        return 'C' ;
    }  
    if (grade>=60){
        return 'D' ;
    }  
    return 'F' ;
}

console.log(gradeCalculator(92)); // => "A"
console.log(gradeCalculator(84)); // => "B"
console.log(gradeCalculator(70)); // => "C"
console.log(gradeCalculator(61)); // => "D"
console.log(gradeCalculator(43)); // => "F"