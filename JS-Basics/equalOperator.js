// === operator do not perform type coersion, strictly compare the same data types.
//  "==" operator performs type coersion and compare values.

const age = '18'

console.log(typeof age)

if(age === 18){ //false as '18' === 18 
    console.log("You just adult now!")
}
else {
    console.log("no type coersion happened as we used '===' operator")
}

if(age == 18){ //true as '18' == 18
    console.log("You just adult now!")
}
else {
    console.log("Not yet adult")
}