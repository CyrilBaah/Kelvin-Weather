// Constant value of Kelvin : 293
const kelvin = 0;

// Celsius is 273 less kelvin
const celsius = kelvin - 273;

// Fahrenheit = celsius * (9 / 5) + 32
let fahrenheit = celsius * (9 / 5) + 32;

// Round fahrenheit using Math.floor()
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)