const printHello = () => {
    console.log("hello world")
}

const printMyName = (name) => {
    console.log(name)
}

// If passing argument is only one, then you can also write function as below.
const printName = name => {
    console.log(name)
}

const printNameAge = (name, age) => {
    console.log(name, age)
}

const multiply = (number) => {
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
