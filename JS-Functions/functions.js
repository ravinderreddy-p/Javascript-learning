function myFunc() {
    console.log("Function demo")
}

function printMyName(name){
    console.log(name)
}
let name = "Ravi"
printMyName(name)

myFunc()

// function with return type
function calcAge(birthYear) {
    return 2021 - birthYear;
}
const raviCurrentAge = calcAge(1988);
const charviCurrentAge = calcAge(2018);

console.log('ravi ' + raviCurrentAge);
console.log('charvi ' + charviCurrentAge);

