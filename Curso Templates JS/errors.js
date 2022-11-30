// While technically permitted by the syntax, untagged template literals are strings and will throw a TypeError when chained.

console.log(`Hello``World`); // TypeError: "Hello" is not a function
// Copy to Clipboard
// The only exception is optional chaining, which will throw a syntax error.

console.log?.`Hello`; // SyntaxError: Invalid tagged template on optional chain
console?.log`Hello`; // SyntaxError: Invalid tagged template on optional chain