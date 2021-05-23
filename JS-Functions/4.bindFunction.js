const addTax = (taxRate, itemVal) => itemVal + itemVal * taxRate;

const phonePrice = addTax(0.1, 200);
console.log(phonePrice);

const addVAT = addTax.bind(null, 0.23); //If no need to pass this keyword args, then pass 'null'
console.log(addVAT(200));


// Above bind() can also be return as below using return functions.
const addTaxRate = function (taxRate){
    return function(itemValue){
        return itemValue + itemValue * taxRate;
    }
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(200));