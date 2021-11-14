/* Basic operators, maths
We know many operators from school. They are things like addition +, multiplication *, subtraction -, and so on.

In this chapter, we’ll start with simple operators, then concentrate on JavaScript-specific aspects, not covered by school arithmetic.

Terms: “unary”, “binary”, “operand”
Before we move on, let’s grasp some common terminology.

An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.

An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number: */

/* let x = 1;

x = -x;
console.log( x ); // -1, unary negation was applied
An operator is binary if it has two operands. The same minus exists in binary form as well:
 */
let x = 1,
  y = 3;
console.log(y - x); // 2, binary minus subtracts values

/* Formally, in the examples above we have two different operators that share the same symbol: the negation operator, a unary operator that reverses the sign, and the subtraction operator, a binary operator that subtracts one number from another.

Maths
The following math operations are supported:

Addition +,
Subtraction -,
Multiplication *,
Division /,
Remainder %,
Exponentiation **.
The first four are straightforward, while % and ** need a few words about them. */
/* 
Remainder %
The remainder operator %, despite its appearance, is not related to percents.

The result of a % b is the remainder of the integer division of a by b.

For instance: */

console.log(5 % 2); // 1, a remainder of 5 divided by 2
console.log(8 % 3); // 2, a remainder of 8 divided by 3

/* Exponentiation **
The exponentiation operator a ** b raises a to the power of b.

In school maths, we write that as ab.

For instance: */
console.log(2 ** 2); // 2² = 4
console.log(2 ** 3); // 2³ = 8
console.log(2 ** 4); // 2⁴ = 16

/* Just like in maths, the exponentiation operator is defined for non-integer numbers as well.

For example, a square root is an exponentiation by ½: */

console.log(4 ** (1 / 2)); // 2 (power of 1/2 is the same as a square root)
console.log(8 ** (1 / 3)); // 2 (power of 1/3 is the same as a cubic root)

/* String concatenation with binary +
Let’s meet features of JavaScript operators that are beyond school arithmetics.

Usually, the plus operator + sums numbers.

But, if the binary + is applied to strings, it merges (concatenates) them: */
let s = "my" + "string";
console.log(s); // mystring

/* Note that if any of the operands is a string, then the other one is converted to a string too.

For example:
 */
console.log("1" + 2); // "12"
console.log(2 + "1"); // "21"

/* See, it doesn’t matter whether the first operand is a string or the second one.

Here’s a more complex example: */

console.log(2 + 2 + "1"); // "41" and not "221"
/* Here, operators work one after another. The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'. */

console.log("1" + 2 + 2); // "122" and not "14"

/* Here, the first operand is a string, the compiler treats the other two operands as strings too. The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".

The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.

Here’s the demo for subtraction and division:
*/

console.log(6 - "2"); // 4, converts '2' to a number
console.log("6" / "2"); // 3, converts both operands to numbers

/* Numeric conversion, unary +
The plus + exists in two forms: the binary form that we used above and the unary form.

The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

For example: */

// No effect on numbers
let a = 1;
console.log(+a); // 1

let b = -2;
console.log(+b); // -2

// Converts non-numbers
console.log(+true); // 1
console.log(+""); // 0

/* It actually does the same thing as Number(...), but is shorter.

The need to convert strings to numbers arises very often. For example, if we are getting values from HTML form fields, they are usually strings. What if we want to sum them?

The binary plus would add them as strings: */

let apples = "2";
let oranges = "3";
console.log(apples + oranges); // "23", the binary plus concatenates strings
/* let apples = "2";
let oranges = "3";

 both values converted to numbers before the binary plus
console.log( +apples + +oranges ); // 5

 the longer variant
 console.log( Number(apples) + Number(oranges) ); // 5 */

/**From a mathematician’s standpoint, the abundance of pluses may seem strange. But from a programmer’s standpoint, there’s nothing special: unary pluses are applied first, they convert strings to numbers, and then the binary plus sums them up.

Why are unary pluses applied to values before the binary ones? As we’re going to see, that’s because of their higher precedence.

Operator precedence
If an expression has more than one operator, the execution order is defined by their precedence, or, in other words, the default priority order of operators.

From school, we all know that the multiplication in the expression 1 + 2 * 2 should be calculated before the addition. That’s exactly the precedence thing. The multiplication is said to have a higher precedence than the addition.

Parentheses override any precedence, so if we’re not satisfied with the default order, we can use them to change it. For example, write (1 + 2) * 2.

There are many operators in JavaScript. Every operator has a corresponding precedence number. The one with the larger number executes first. If the precedence is the same, the execution order is from left to right.

Here’s an extract from the precedence table (you don’t need to remember this, but note that unary operators are higher than corresponding binary ones): */

/* Precedence	Name	Sign
…	…	…
17	unary plus	+
17	unary negation	-
16	exponentiation	**
15	multiplication	*
15	division	/
13	addition	+
13	subtraction	-
…	…	…
3	assignment	=
…	…	… */

/* As we can see, the “unary plus” has a priority of 17 which is higher than the 13 of “addition” (binary plus). That’s why, in the expression "+apples + +oranges", unary pluses work before the addition.
 */

/* Assignment
Let’s note that an assignment = is also an operator. It is listed in the precedence table with the very low priority of 3.

That’s why, when we assign a variable, like x = 2 * 2 + 1, the calculations are done first and then the = is evaluated, storing the result in x. */
let x2 = 2 * 2 + 1;

console.log(x2); // 5

let a2 = 1;
let b2 = 2;

let c = 3 - (a2 = b2 + 1);

console.log(a); // 3
console.log(c); // 0

/* In the example above, the result of expression (a = b + 1) is the value which was assigned to a (that is 3). It is then used for further evaluations.

Funny code, isn’t it? We should understand how it works, because sometimes we see it in JavaScript libraries.

Although, please don’t write the code like that. Such tricks definitely don’t make code clearer or readable.

Chaining assignments
Another interesting feature is the ability to chain assignments: */

let a3, b3, c2;

a3 = b3 = c2 = 2 + 2;

console.log(a3); // 4
console.log(b3); // 4
console.log(c2); // 4
/* 
Chained assignments evaluate from right to left. First, the rightmost expression 2 + 2 is evaluated and then assigned to the variables on the left: c, b and a. At the end, all the variables share a single value.

Once again, for the purposes of readability it’s better to split such code into few lines: */
/* c = 2 + 2;
b = c;
a = c; */

/* Modify-in-place
We often need to apply an operator to a variable and store the new result in that same variable.

For example:
 */

let n = 2;
n = n + 5;
n = n * 2;

//This notation can be shortened using the operators += and *=:
n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

console.log(n); // 14

/* Short “modify-and-assign” operators exist for all arithmetical and bitwise operators: /=, -=, etc.

Such operators have the same precedence as a normal assignment, so they run after most other calculations:
 */

let n2 = 2;

n2 *= 3 + 5;

console.log(n2); // 16  (right part evaluated first, same as n *= 8)
/* Increment/decrement
Increasing or decreasing a number by one is among the most common numerical operations.

So, there are special operators for it:

Increment ++ increases a variable by 1: */
let counter = 2;
counter++; // works the same as counter = counter + 1, but is shorter
console.log(counter); // 3
//Decrement -- decreases a variable by 1:
counter = 2;
counter--; // works the same as counter = counter - 1, but is shorter
console.log(counter); // 1

/* Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error. */
/* The operators ++ and -- can be placed either before or after a variable.

When the operator goes after the variable, it is in “postfix form”: counter++.
The “prefix form” is when the operator goes before the variable: ++counter.
Both of these statements do the same thing: increase counter by 1.

Is there any difference? Yes, but we can only see it if we use the returned value of ++/--.

Let’s clarify. As we know, all operators return a value. Increment/decrement is no exception. The prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement).

To see the difference, here’s an example: */
counter = 1;
let a5 = ++counter; // (*)

console.log(a5); // 2
/* In the line (*), the prefix form ++counter increments counter and returns the new value, 2. So, the console.log shows 2.

Now, let’s use the postfix form: */
counter = 1;
let a6 = counter++; // (*) changed ++counter to counter++

console.log(a6); // 1
/* Bitwise operators
Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

These operators are not JavaScript-specific. They are supported in most programming languages.

The list of operators:

AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> )
These operators are used very rarely, when we need to fiddle with numbers on the very lowest (bitwise) level. We won’t need these operators any time soon, as web development has little use of them, but in some special areas, such as cryptography, they are useful. You can read the Bitwise Operators chapter on MDN when a need arises. */

/* Comma
The comma operator , is one of the rarest and most unusual operators. Sometimes, it’s used to write shorter code, so we need to know it in order to understand what’s going on.

The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.

For example: */
let a7 = (1 + 2, 3 + 4);

console.log(a7); // 7 (the result of 3 + 4)
/* Here, the first expression 1 + 2 is evaluated and its result is thrown away. Then, 3 + 4 is evaluated and returned as the result.

Comma has a very low precedence
Please note that the comma operator has very low precedence, lower than =, so parentheses are important in the example above.

Without them: a = 1 + 2, 3 + 4 evaluates + first, summing the numbers into a = 3, 7, then the assignment operator = assigns a = 3, and the rest is ignored. It’s like (a = 1 + 2), 3 + 4.

Why do we need an operator that throws away everything except the last expression?

Sometimes, people use it in more complex constructs to put several actions in one line.

For example: */
// three operations in one line
// for (a = 1, b = 3, c = a * b; a < 10; a++) {
//  ...
// }
