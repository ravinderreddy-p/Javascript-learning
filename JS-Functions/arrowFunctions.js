const printHello = () => {
    console.log("hello world")
}

const printMyName = (name) => {
    console.log(name)
}

// If passing only one argument, then you can also write function as below without '()'.
const printName = name => {
    console.log(name)
}

const printNameAge = (name, age) => {
    console.log(name, age)
}

const multiply = number => number * 2; //single line we can write if function block has only one evaluation. We can skip return keyword, it takes automatically

const multiply1 = (number) => {
    const x = number * 2
    return x;
}

const multiply2 = (number) => {
     return number * 2
}

// Above function can be written as below short way

const multi = number =>  number * 2

console.log(multiply(5))

console.log(multi(4))

printHello()

let name = "Ravi"
let age = "28"

printMyName(name)

printName(name)

printNameAge(name, age)

console.log(multiply2(3))
