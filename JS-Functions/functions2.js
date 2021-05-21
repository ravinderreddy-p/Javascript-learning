const measureKelvin = function () {
    const measure = {
        type: 'temp',
        unit: 'celcius',
        value: "10",
    };

const kelvin = Number(measure.value) + 273;
return kelvin;

}

console.log(measureKelvin());