// To destructure an OBJECT, we use "{}" & we have to provide exact matching property names of an Object
// In any Object, order of an element does not matter.

'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo 23, Firenze, Italy',
    categories: ['Italian', 'Indian', 'Veg', 'Non-veg', 'Mexican'],
    starterMenu: ['Normal Bread', 'Garlic Bread', 'Chicken', 'Mutton'],
    mainMenu: ['Pizza', 'Pasta', 'Biryani', 'Roti'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,  //open 24 hours
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex],
        this.mainMenu[mainIndex]];
    },

    orderDelivery: function({ starterIndex, mainIndex, time, address}) {
        console.log(`Order received at ${time} and address is: ${address}
         starter is: ${this.starterMenu[starterIndex]}  and maincourse is: ${this.mainMenu[mainIndex]}`);
    },
};

//call the orderDelivery function
restaurant.orderDelivery({
    time: '22:30',
    address: 'altmore avenue, 106',
    mainIndex: 2,
    starterIndex: 3,
});
// Output:
// Order received at 22:30 and address is: altmore avenue, 106
//          starter is: Mutton  and maincourse is: Biryani

const { name, openingHours, categories } = restaurant;

console.log(name, openingHours, categories);
// Output
// Classico Italiano {
//     thu: { open: 12, close: 22 },
//     fri: { open: 11, close: 23 },
//     sat: { open: 0, close: 24 }
//   } [ 'Italian', 'Indian', 'Veg', 'Non-veg', 'Mexican' ]

// Rename the property names as below:

const { 
    name: restaurantName, 
    openingHours: hours,
    categories: tags 
} = restaurant;

console.log(restaurantName, hours, tags); //we will get output same as above example.

// apply default values in case given properties are not exists in object
const {
    menu = [],  //as menu property does not exists, it shows empty array '[]', if we don't define it then it shows "undefined"
    starterMenu : starters = [],
} = restaurant;

console.log(menu, starters); //[] [ 'Normal Bread', 'Garlic Bread', 'Chicken', 'Mutton' ]

// Mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
({a, b} = obj);
console.log(a, b); //23 7

// Nested objects
const {
    fri: {
            open: o, 
            close: c,
        }
} = openingHours

console.log(o, c); //11 23
