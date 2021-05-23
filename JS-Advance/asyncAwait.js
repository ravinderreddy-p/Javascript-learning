const whereAmI = async function(country) {
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
    console.log(res);
};
whereAmI('india');
console.log('First executes as sync');