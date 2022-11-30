/**
 * 
 * Template Literals use back-ticks (``) rather than the quotes ("") to define a string:
 */

//Back-Tics Syntax

 let text = `Hello World!`;

 //Quotes Inside Strings
 let textWithDoubleQuotes = `He's often called "Johnny"`;

//Multiline Strings
let textWithMultipleLines =
`The quick
brown fox
jumps over
the lazy dog`;

//Interpolation
let firstName = "John";
let lastName = "Doe";

let greeting = `Welcome ${firstName}, ${lastName}!`;

//Calculations - Expression Substitution
let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;