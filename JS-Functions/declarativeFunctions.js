// Declarative functions can be called even before defining them.
currentAge = calcAge(2018);

function calcAge(birthYear) {
    age = 2021 - birthYear;
    return age;
}

// currentAge = calcAge(2018);
console.log(currentAge);
