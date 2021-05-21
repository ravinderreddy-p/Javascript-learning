'use strict';

const arr = [2, 3, 4];

console.log(arr) // [2, 3, 4]

// Destructing an arr.
const [x, y, z] = arr; // here [] operator at left used to desctrure an arr, not used as array declaration.

console.log(x, y, z); // 2 3 4

const [first, second] = arr; // first two elements from array are taken, 2 & 3w
console.log(first, second); // 2, 3

let [one, , third] = arr;
console.log(one, third); // 2, 3

// swap two elements or Mutating variables.
[third, one] = [one, third]
console.log(one, third);

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo 23, Firenze, Italy',
    categories: ['Italian', 'Indian', 'Veg', 'Non-veg', 'Mexican'],
    starterMenu: ['Normal Bread', 'Garlic Bread', 'Chicken', 'Mutton'],
    mainMenu: ['Pizza', 'Pasta', 'Biryani', 'Roti'],

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex],
                this.mainMenu[mainIndex]];
    }
};

console.log(restaurant.order(3, 2)); //['Mutton', 'Biryani']

//Destructure Nested array
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i,j); // 2 [5, 6]

const [k, , [l,m]] = nested;

console.log(k,l,m) //2, 5, 6

//Destructure array with default values
const [p, q, r] = [8, 9];
console.log(p, q, r); // 8 9 undefined
//now we can declare default values to destructre variables as below
const [s=0, t=0, u=0] = [8, 9]; //we can assign any default values instead of '0'
console.log(s, t, u); // 8 9 0