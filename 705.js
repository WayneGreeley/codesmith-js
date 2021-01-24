//Challenge: personFromConstructor

function PersonConstructor() {
    this.greet = function() {
        console.log('hello');
    }
}

function personFromConstructor(name, age) {
    let person = new PersonConstructor();
    person.name = name;
    person.age = age;
    return person;
}

const mike = personFromConstructor('Mike', 30);

console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); // -> Logs 30
mike.greet(); // -> Logs 'hello'
