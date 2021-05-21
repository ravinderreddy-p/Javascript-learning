console.log(Boolean(0)) //false
console.log(Boolean(1)) //true

console.log(Boolean(undefined)) // false

console.log(Boolean('Jonas')) //string = true

console.log(Boolean({})) //empty object = true

console.log(Boolean('')) //empty string = false

const money = 0;
if (money) {  //as money == 0, it's false
    console.log("Don't spend at all!")
}
else {
    console.log("You should spend full money😀")
}