const greet = function (greeting) {
    return function (name) {
            console.log(`${greeting} ${name}`);
    };
};

greet('Hello')('Ravi!'); //Hello Ravi!

const greetHey = greet('Hey');
greetHey('Charvi!') //Hey Charvi

// I can write above greet function in arrow function

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Ravi'); //Hi Ravi