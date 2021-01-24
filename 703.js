//Challenge: introduce

const personStore = {
    greet: function() {
        console.log('hello');
    }
}

function personFromPersonStore(name, age) {
    const person = Object.create(personStore);
    person.name = name;
    person.age = age;
    return person;
}

const sandra = personFromPersonStore('Sandra', 26);

personStore.introduce = function() {
    console.log('Hi, my name is ' + sandra.name);
}

sandra.introduce(); // -> Logs 'Hi, my name is Sandra'
