// OR (||) Operator: If any operand finds as Truth then return first Truth element.
console.log(3 || 'Ravi'); // 3
console.log(0 || '' || 'Hello'); // Hello
console.log('' || 'Ravi') //Ravi
console.log(undefined || null) //null
console.log(true || 0);

// AND (&&) Operator: If any operand finds false, then return first False element.
// If all operand finds truethy then return last truthy element.
console.log(0 && 'Jonas') //0
console.log(7 && 'Jonas') //Jonas. Because both are true and printed last element.
console.log('Hello' && 23 && null && 'jonas') //null
