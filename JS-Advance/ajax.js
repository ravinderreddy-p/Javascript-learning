'use strict';

const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/name/india');

request.send();
console.log(response.responseText);

//Asynchronous call with callback function
request.addEventListener('load', function(){
    console.log(this.responseText);
})
