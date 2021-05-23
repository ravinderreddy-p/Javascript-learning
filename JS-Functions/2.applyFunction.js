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
// Create a book function by copying the book() method of lufthansa.
const book = lufthansa.book;

// Create a array with list of arguments to pass to apply() method.
const ticketSania = [234, 'Sania'];

// Apply() code here
book.apply(lufthansa, ticketSania);
console.log(lufthansa);

const indianAirlines = {
    airline: 'IndianAirlines',
    iataCode: 'IA',
    bookings: [],
};
const ticketRavi = [238, 'Ravi'];
book.apply(indianAirlines, ticketRavi);
console.log(indianAirlines);

// we can also use Spread(...) operator along with call() method for above 

const ticketCharvi = [238, 'Charvi'];
book.call(indianAirlines, ...ticketCharvi);
console.log(indianAirlines);