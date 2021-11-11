// Code structure
// The first thing we’ll study is the building blocks of code.

// Statements
// // Statements are syntax constructs and commands that perform actions.

// We’ve already seen a statement,
console.log("Hello, world!");
//, which shows the message “Hello, world!”.

// We can have as many statements in our code as we want. Statements can be separated with a semicolon.

// For example, here we split “Hello World” into two alerts:

// prettier-ignore
console.log("Hello");
console.log("World"); // prettier-ignore

// Semicolons
// A semicolon may be omitted in most cases when a line break exists.

// This would also work:

console.log("Hello");
console.log("World");

// Here, JavaScript interprets the line break as an “implicit” semicolon. This is called an automatic semicolon insertion.

// In most cases, a newline implies a semicolon. But “in most cases” does not mean “always”!

// There are cases when a newline does not mean a semicolon. For example:

console.log(3 + 1 + 2);

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(console.warn);

// We recommend putting semicolons between statements even if they are separated by newlines. This rule is widely adopted by the community. Let’s note once again – it is possible to leave out semicolons most of the time. But it’s safer – especially for a beginner – to use them.

// There may not be /*...*/ inside another /*...*/.

// Such code will die with an error:

/*
  ///* nested comment ?!? 
*/

//Summary

/**
 * Statements function(params)
 * Semicolons ;
 * Comments // //
 *
 */
