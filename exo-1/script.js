// you can write js here

//EXO-1 - Les variables

var kelvin = prompt("Quelle est la température en Kelvin aujourd'hui ?");

var kelvin = 294;
console.log(kelvin);
var celsius = kelvin - 273;
console.log(celsius);
//this line of code calculates the degree in celsuis
var fahrenheit = celsius * (9/5) + 32;
console.log(fahrenheit);
//It is used to convert temperature on a Celsius scale to temperature on a Fahrenheit scale.
let a = Math.floor(fahrenheit);
console.log(a)
//The Math.floor() method rounds a number DOWNWARDS to the nearest integer
