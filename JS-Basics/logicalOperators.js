const hasDriverLicence = true;
const hasGoodVision = true;

console.log(hasDriverLicence && hasGoodVision);//true

console.log(hasDriverLicence || hasGoodVision); // true

const isTired = false;

console.log(hasDriverLicence && isTired) //false

console.log(hasDriverLicence || isTired) // true

console.log(hasDriverLicence && hasGoodVision && isTired) //false

