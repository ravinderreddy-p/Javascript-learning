// Rest operator packs elements into an array & also packs properties into Object.

// SPREAD Operator because on RIGHT side of "="
const arr = [1, 2, ...[3, 4]];

//REST operator, because on LEFT side of "="
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2 [ 3, 4, 5 ]


//REST Operator on Objects
const operningHours = {
    thu: {
        open: '10:30',
        close: '22:30',
    },
    fri: {
        open: '11.30',
        close: '23.30',
    },
    sat: {
        open: '0.0',
        close: '24.0'
    },
};

// REST operator is used (...weekdays) to pack all remaining days except sat.
const { sat, ...weekdays } = operningHours;
console.log(sat); // { open: '0.0', close: '24.0' }
console.log(weekdays);
// OUTPUT:
// {
//     thu: { open: '10:30', close: '22:30' },
//     fri: { open: '11.30', close: '23.30' }
//  }
