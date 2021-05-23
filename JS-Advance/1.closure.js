// A Closure makes sure that a function does not loose connection to variables 
// that exists at the function's birth place.

const secureBooking = function () {
    let passengerCount = 0;
    
    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};

const book = secureBooking();

book(); // 1 passengers
book(); // 2 passengers
book(); // 3 passengers
