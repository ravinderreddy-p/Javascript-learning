// Nullish: null and undefined (NOT 0 or '')
const noOfGuests = 0;

const guests = noOfGuests || 10;

console.log(guests); //10 because noOfGuests = 0 , which is False

const guestCorrect = noGuests ?? 10; // if noGuests is undefined then it executes next value, ie., 10
console.log(guestCorrect);