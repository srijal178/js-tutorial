let num = new Number(5);
console.log(num.constructor); // [Function: Number]
console.log(Number.prototype.constructor === Number); // true

/*toExponential()	Converts number to exponential notation string
toFixed()	Formats with fixed number of decimal places
toLocaleString()	Locale-aware number formatting
toPrecision()	Formats to specified number of significant digits
toString()	Converts to string (base 10 or other radix)
valueOf()	Returns the primitive number value
*/
let num1 = 1234567.89;
console.log("Exp", num1.toExponential()); // "1.234e+3"
console.log("EXP", num1.toExponential(2));

console.log("toFixed", num1.toFixed(2));

console.log(num1.toLocaleString()); // e.g., "1,234,567.89"
console.log(num1.toLocaleString("de-DE")); // "1.234.567,89"

console.log(num1.toString()); // "255" (default base 10)
console.log(num1.toString(16)); // "ff" (hex)
console.log(num1.toString(2)); // "11111111" (binary)

console.log("precision", num1.toPrecision(4)); // "123.5"
console.log("Precision", num1.toPrecision(2)); // "1.2e+2"
