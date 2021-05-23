const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push(
            {
                flight: `${this.iataCode}${flightNum}`,
                name: `${name}`,
            }
        );
    },

};

const euroWings = {
    airline: 'EuroWings',
    iataCode: 'EW',
    bookings: [],
};

// Create book function by copying a method from lufthansa object.
const book = lufthansa.book;
//Apply bind on book() function to pass "this" arguments. Here "euroWings"
const bookEW = book.bind(euroWings);
// Pass the flightNum and Name arguments here.
bookEW(317, 'Pandu');
bookEW(317, 'Charvi');
// Print euroWings to see updated bookings.
console.log(euroWings);

// We can also pass multiple arguments to bind() method along with this, as below:

const bookEW23 = book.bind(euroWings, 23) //passing this oject and flightNum.
bookEW23('Archana');
console.log(euroWings);

const bookEW24 = book.bind(euroWings, 24, 'Ravi');
bookEW24();
console.log(euroWings);