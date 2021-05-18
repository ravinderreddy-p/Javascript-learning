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

printHello()

let name = "Ravi"
let age = "28"

printMyName(name)

printName(name)

printNameAge(name, age)
