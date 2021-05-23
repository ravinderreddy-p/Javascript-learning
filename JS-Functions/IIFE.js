// Normal function as below (Expressive function)
const runOnce = function () {
    console.log('This will never run again');
}

runOnce();

// let's write IIFE function now
(function() {
    console.log('This will never run again');
})();

// IIFE with arrow function
(() => console.log('This arrow IIFE never run again'))();