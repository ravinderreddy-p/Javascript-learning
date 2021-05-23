//Build a Promise called "lotteryPromise"
const lotteryPromise = new Promise(function(resolve, reject){
    if(Math.random() >= 0.5){
        resolve('You WIN ');
    }
    else {
        reject('You lost your money');
    }
});

//Consume the Promise
lotteryPromise.then(res => console.log(res))
    .catch(err =>console.error(err));


//Output:
// You lost your money  [err condition]
// OR
// You WIN [res condition]