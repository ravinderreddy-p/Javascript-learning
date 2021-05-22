const greet = function (greeting) {
    return function (name) {
            console.log(`${greeting} ${name}`);
    };
};

greet('Hello')('Ravi!'); //Hello Ravi!

const greetHey = greet('Hey');
greetHey('Charvi!') //Hey Charvi