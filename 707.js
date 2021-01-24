//Challenge: PersonClass

class PersonClass {
	constructor(name) {
		this.name = name;
		this.greet = function greet() {console.log('hello');}
	}
}

const george = new PersonClass('George');

george.greet(); // -> Logs 'hello'
