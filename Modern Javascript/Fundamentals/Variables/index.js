/* Variables
Most of the time, a JavaScript application needs to work with information. Here are two examples:

An online shop – the information might include goods being sold and a shopping cart.
A chat application – the information might include users, messages, and much more.
Variables are used to store this information.

A variable
A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.

To create a variable in JavaScript, use the let keyword.

The statement below creates (in other words: declares) a variable with the name “message”: */
let message;

message = "Hello"; // store the string 'Hello' in the variable named message // define the variable and assign the value

alert(message); // Hello! shows the variable content

let user = "John",
  age = 25;
//   A variable should be declared only once.

//   A repeated declaration of the same variable is an error:

{
  // We can also declare two variables and copy data from one into the other.

  let hello = "Hello world!";

  let message2;

  // copy 'Hello world' from hello into message
  message2 = hello;

  // now two variables hold the same data
  alert(hello); // Hello world!
  alert(message2); // Hello world!
}

/* 
Variable naming
There are two limitations on variable names in JavaScript:

The name must contain only letters, digits, or the symbols $ and _.
The first character must not be a digit.
Examples of valid names: */

let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3

// Examples of incorrect variable names:

// let 1a; // cannot start with a digit

// let my-name; // hyphens '-' aren't allowed in the name

// It is possible to use any language, including cyrillic letters or even hieroglyphs, like this:

let имя = "...";
let 我 = "...";
// Technically, there is no error here. Such names are allowed, but there is an international convention to use English in variable names. Even if we’re writing a small script, it may have a long life ahead. People from other countries may need to read it some time.

// There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.

// For example: let, class, return, and function are reserved.

// The code below gives a syntax error:

// let let = 5; // can't name a variable "let", error!
// let return = 5; // also can't name it "return", error!

// An assignment without use strict
// Normally, we need to define a variable before using it. But in the old times, it was technically possible to create a variable by a mere assignment of the value without using let. This still works now if we don’t put use strict in our scripts to maintain compatibility with old scripts.

// note: no "use strict" in this example

num = 5; // the variable "num" is created if it didn't exist

alert(num); // 5

// This is a bad practice and would cause an error in strict mode:

// "use strict";

// num = 5; // error: num is not defined
/* 
Constants
To declare a constant (unchanging) variable, use const instead of let:
 */
// const myBirthday = '18.04.1982';
// Variables declared using const are called “constants”. They cannot be reassigned. An attempt to do so would cause an error:

const myBirthday = "18.04.1982";

try {
  console.log(myBirthday);
  myBirthday = "01.01.2001"; // error, can't reassign the constant!
  console.log(myBirthday);
} catch (error) {
  // index.js:105 TypeError: Assignment to constant variable.
  // at
  console.warn(error);
}

/* Uppercase constants
There is a widespread practice to use constants as aliases for difficult-to-remember values that are known prior to execution.

Such constants are named using capital letters and underscores.

For instance, let’s make constants for colors in so-called “web” (hexadecimal) format: */

const COLOR_RED = "#F00";
console.log(COLOR_RED);
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

/* Some good-to-follow rules are:

Use human-readable names like userName or shoppingCart.
Stay away from abbreviations or short names like a, b, c, unless you really know what you’re doing.
Make names maximally descriptive and concise. Examples of bad names are data and value. Such names say nothing. It’s only okay to use them if the context of the code makes it exceptionally obvious which data or value the variable is referencing.
Agree on terms within your team and in your own mind. If a site visitor is called a “user” then we should name related variables currentUser or newUser instead of currentVisitor or newManInTown.
 */

/**  Summary
We can declare variables to store data by using the var, let, or const keywords.

let – is a modern variable declaration.
var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
const – is like let, but the value of the variable can’t be changed.
Variables should be named in a way that allows us to easily understand what’s inside them. */
