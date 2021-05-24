const x = 101;
let isPrime = 'Yes';
for(let i = 2; i < x; i++){
    if(x%i == 0){
        isPrime = 'No';
        break;
    }
}
console.log(isPrime);