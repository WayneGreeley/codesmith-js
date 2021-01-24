//Challenge: PersonConstructor

function PersonConstructor() {
	this.greet = function greet() { 
        console.log('hello');
    }
}

const simon = new PersonConstructor();

simon.greet(); // -> Logs 'hello'
