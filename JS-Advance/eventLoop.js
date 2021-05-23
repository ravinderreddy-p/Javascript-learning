//Micro-tasks are priority over regular call backs

console.log('Test start'); //Synchronous execution
setTimeout(() => console.log('0 sec timer'), 0); //Asynchronous execution -> WEb API then to callback Queue -> Event loop -> call stack -> Executes
Promise.resolve('Resolved Promise 1').then(res => //Asynchronous execution -> WEb API to Micro-task Queue -> Event Loop -> Call stack -> Executes
    console.log(res)); 
console.log('Test end'); //Synchronous execution