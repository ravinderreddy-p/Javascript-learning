// Spread Operator("...") is used to unpack the array elements & also object properties


// Spread operator on arrays
const arr = [7, 8, 9];
const badArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badArr); 

const newArr = [1, 2, ...arr]; // Unpacking arr.
console.log(newArr); //[ 1, 2, 7, 8, 9 ]
console.log(...newArr); //1 2 7 8 9

// Spread operator on Objects
const person = {
    firstName : 'Max',
    lastName: 'Mith'
};

const newPerson = {
    ...person,
    age: 28,

};

console.log(newPerson); //{ firstName: 'Max', lastName: 'Mith', age: 28 }