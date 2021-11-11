/* A value in JavaScript is always of a certain type. For example, a string or a number.

There are eight basic data types in JavaScript. Here, we’ll cover them in general and in the next chapters we’ll talk about each of them in detail.

We can put any type in a variable. For example, a variable can at one moment be a string and then store a number:
 */
// no error
let message = "hello";
message = 123456;
/* Programming languages that allow such things, such as JavaScript, are called “dynamically typed”, meaning that there exist data types, but variables are not bound to any of them. */

/* Number */
let number = 123;
number = 12.345;
/* The number type represents both integer and floating point numbers.

There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on.

Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.

Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.

We can get it as a result of division by zero: */

alert(1 / 0); // Infinity
// Or just reference it directly:

alert(Infinity); // Infinity
// NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:

alert("not a number" / 2); // NaN, such division is erroneous
// NaN is sticky. Any further operation on NaN returns NaN:

alert("not a number" / 2 + 5); // NaN

/* BigInt
In JavaScript, the “number” type cannot represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives. It’s a technical limitation caused by their internal representation.

For most purposes that’s quite enough, but sometimes we need really big numbers, e.g. for cryptography or microsecond-precision timestamps.

BigInt type was recently added to the language to represent integers of arbitrary length.

A BigInt value is created by appending n to the end of an integer:
 */
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
/* As BigInt numbers are rarely needed, we don’t cover them here, but devoted them a separate chapter BigInt. Read it when you need such big numbers. */

/**
 * number - NaN , Infinity, 1000 Operators : (* - + /)
 * BigInt - 1234567890123456789012345678901234567890n
 */
/* String
A string in JavaScript must be surrounded by quotes.
 */
let str = "Hello";
let str2 = "Single quotes are ok too";
let phrase = `can embed another ${str}`;
/* In JavaScript, there are 3 types of quotes.

Double quotes: "Hello".
Single quotes: 'Hello'.
Backticks: `Hello`. */
/* Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.

Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, this is called template literals */
let name = "John";

// embed a variable
alert(`Hello, ${name}!`); // Hello, John!

// embed an expression
alert(`the result is ${1 + 2}`); // the result is 3
/* The expression inside ${…} is evaluated and the result becomes a part of the string. We can put anything in there: a variable like name or an arithmetical expression like 1 + 2 or something more complex.

Please note that this can only be done in backticks. Other quotes don’t have this embedding functionality!
 */
alert("the result is ${1 + 2}"); // the result is ${1 + 2} (double quotes do nothing)

// Boolean (logical type)
// The boolean type has only two values: true and false.

// This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.

// For instance:

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
// Boolean values also come as a result of comparisons:

let isGreater = 4 > 1;

alert(isGreater); // true (the comparison result is "yes")

/* The “null” value
The special null value does not belong to any of the types described above.

It forms a separate type of its own which contains only the null value: */

let age = null;
/* In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

It’s just a special value which represents “nothing”, “empty” or “value unknown”.

The code above states that age is unknown. */

/* The “undefined” value
The special value undefined also stands apart. It makes a type of its own, just like null.

The meaning of undefined is “value is not assigned”.

If a variable is declared, but not assigned, then its value is undefined: */
// change the value to undefined}
//Technically, it is possible to explicitly assign undefined to a variable:

let age2;
console.log(age2);
age2 = undefined;

alert(age2); // "undefined"
/* 
Objects and Symbols
The object type is special.

All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.

Being that important, objects deserve a special treatment. We’ll deal with them later in the chapter Objects, after we learn more about primitives.

The symbol type is used to create unique identifiers for objects. We have to mention it here for the sake of completeness, but also postpone the details till we know objects.
 */

/* 
The typeof operator
The typeof operator returns the type of the argument. It’s useful when we want to process values of different types differently or just want to do a quick check.

It supports two forms of syntax:

As an operator: typeof x.
As a function: typeof(x).
In other words, it works with parentheses or without them. The result is the same.

The call to typeof x returns a string with the type name: */
typeof undefined; // "undefined"

typeof 0; // "number"

typeof 10n; // "bigint"

typeof true; // "boolean"

typeof "foo"; // "string"

typeof Symbol("id"); // "symbol"

typeof Math; // "object"  (1)

typeof null; // "object"  (2)

typeof alert; // "function"  (3)

/* The last three lines may need additional explanation:

Math is a built-in object that provides mathematical operations. We will learn it in the chapter Numbers. Here, it serves just as an example of an object.
The result of typeof null is "object". That’s an officially recognized error in typeof behavior, coming from the early days of JavaScript and kept for compatibility. Definitely, null is not an object. It is a special value with a separate type of its own.
The result of typeof alert is "function", because alert is a function. We’ll study functions in the next chapters where we’ll also see that there’s no special “function” type in JavaScript. Functions belong to the object type. But typeof treats them differently, returning "function". That also comes from the early days of JavaScript. Technically, such behavior isn’t correct, but can be convenient in practice. */

// Summary
// There are 8 basic data types in JavaScript.

// number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
// bigint is for integer numbers of arbitrary length.
// string for strings. A string may have zero or more characters, there’s no separate single-character type.
// boolean for true/false.
// null for unknown values – a standalone type that has a single value null.
// undefined for unassigned values – a standalone type that has a single value undefined.
// object for more complex data structures.
// symbol for unique identifiers.
// The typeof operator allows us to see which type is stored in a variable.

// Two forms: typeof x or typeof(x).
// Returns a string with the name of the type, like "string".
// For null returns "object" – this is an error in the language, it’s not actually an object.
// In the next chapters, we’ll concentrate on primitive values and once we’re familiar with them, we’ll move on to

// What is the output of the script?

let name2 = "Ilya";

// the expression is a number 1
alert(`hello ${1}`); // hello 1

// the expression is a string "name"
alert(`hello ${"name"}`); // hello name

// the expression is a variable, embed it
alert(`hello ${name2}`); // hello Ilya
