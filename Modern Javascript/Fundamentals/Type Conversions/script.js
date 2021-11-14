/* Most of the time, operators and functions automatically convert the values given to them to the right type.

For example, console.log automatically converts any value to a string to show it. Mathematical operations convert values to numbers.

There are also cases when we need to explicitly convert a value to the expected type. */

/* 
String Conversion
String conversion happens when we need the string form of a value.

For example, console.log(value) does it to show the value.

We can also call the String(value) function to convert a value to a string:

 */
let value = true;
console.log(typeof value); // boolean

value = String(value); // now value is a string "true"
console.log(typeof value); // string

/* Numeric Conversion
Numeric conversion happens in mathematical functions and expressions automatically.

For example, when division / is applied to non-numbers:
 */
console.log("6" / "2"); // 3, strings are converted to numbers
// We can use the Number(value) function to explicitly convert a value to a number:

let str = "123";
console.log(typeof str); // string

let num = Number(str); // becomes a number 123

console.log(typeof num); // number

/* Explicit conversion is usually required when we read a value from a string-based source like a text form but expect a number to be entered.

If the string is not a valid number, the result of such a conversion is NaN. For instance:
 */

let age = Number("an arbitrary string instead of a number");

console.log(age); // NaN, conversion failed

/* Numeric conversion rules:

Value	Becomes…
undefined	NaN
null	0
true and false	1 and 0
string	Whitespaces from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN. */

console.log(Number("   123   ")); // 123
console.log(Number("123z")); // NaN (error reading a number at "z")
console.log(Number(true)); // 1
console.log(Number(false)); // 0

/* Boolean Conversion
Boolean conversion is the simplest one. */

/* It happens in logical operations (later we’ll meet condition tests and other similar things) but can also be performed explicitly with a call to Boolean(value).

The conversion rule:

Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
Other values become true.
For instance: */

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false

console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
console.log(Boolean("0")); // true
console.log(Boolean(" ")); // spaces, also true (any non-empty string is true)

/* 
Summary
The three most widely used type conversions are to string, to number, and to boolean.

String Conversion – Occurs when we output something. Can be performed with String(value). The conversion to string is usually obvious for primitive values.

Numeric Conversion – Occurs in math operations. Can be performed with Number(value).

The conversion follows the rules:

Value	Becomes…
undefined	NaN
null	0
true / false	1 / 0
string	The string is read “as is”, whitespaces from both sides are ignored. An empty string becomes 0. An error gives NaN.
Boolean Conversion – Occurs in logical operations. Can be performed with Boolean(value).

Follows the rules:

Value	Becomes…
0, null, undefined, NaN, ""	false
any other value	true
Most of these rules are easy to understand and memorize. The notable exceptions where people usually make mistakes are:

undefined is NaN as a number, not 0.
"0" and space-only strings like " " are true as a boolean. */
