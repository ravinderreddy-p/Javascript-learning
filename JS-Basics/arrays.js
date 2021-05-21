const leapYear = new Array(2000, 2004, 2008, 2012, 2016, 2020);

console.log(typeof leapYear); // object
console.log(leapYear); // [ 2000, 2004, 2008, 2012, 2016, 2020 ]
console.log(leapYear.length); //6
console.log(leapYear[0]); //2000

const cities = ['London', 'Newyork', 'Hyd', 'Dubai', 'Singapore', 'Malaysia'];
console.log(cities); //[ 'London', 'Newyork', 'Hyd', 'Dubai', 'Singapore', 'Malaysia' ]

cities.push('Delhi'); //append as last element in cities array. ie., after Malaysia
cities.push('Mumbai'); //append as last element in cities array. ie, after Delhi
console.log(cities);

cities.pop(); //remove last element from cities array. ie., Mumbai
console.log(cities)

cities.shift(); //Remove element at beginning. ie., 0th index of cities array
console.log(cities);

cities.unshift('Mumbai'); //adds element at beginning. ie., 0th index of cities array
console.log(cities);

console.log(cities.indexOf('Hyd')); //2
console.log(cities.includes('Hyd')); //true

console.log(cities.indexOf('Sidney')); // -1
console.log(cities.includes('Sidney'));// false

