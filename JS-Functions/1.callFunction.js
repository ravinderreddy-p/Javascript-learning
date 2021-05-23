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

lufthansa.book(239, 'Ravi');
lufthansa.book(239, 'Charvi');
console.log(lufthansa);

const euroWings = {
    'airline': 'EuroWings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;
book.call(euroWings, 23, 'Sarah Williams');
console.log(euroWings);

book.call(lufthansa, 234, 'Mary');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss',
    iataCode: 'SW',
    bookings: [],
}

book.call(swiss, 240, 'Archu');
console.log(swiss);
