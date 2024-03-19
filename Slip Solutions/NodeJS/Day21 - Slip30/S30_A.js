const circle = require("./circle");
let r = 5;

console.log(`Area of Circle with radius ${r}: ${circle.area(r)}`);
console.log(`Circumference of Circle with radius ${r}: ${circle.circumference(r).toFixed(2)}`);