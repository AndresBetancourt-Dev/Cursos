let x: number;   //* Explicitly declares x as a number type
let y = 1;       //* Implicitly declares y as a number type
let z;           //* Declares z without initializing it

x = 1;

/** Type 'string' is not assignable to type 'number'.ts(2322) */
// x = "one"; 

/** Variable 'z' implicitly has an 'any' type, but a better type may be inferred from  */
z = 1; 
z = "one"

/** Boolean */
let flag: boolean;
let yes = true;
let no = false;

/** Number */
let i: number;
let o = 0;
let p: number = 123.456;
//let big: bigint = 100n; ES2020

/** String */
let s: string;
let empty = "";
let abc = 'abc';
let firstName: string = "Mateo";
let sentence: string = `My name is ${firstName}.
    I am new to TypeScript.`;
console.log(sentence);