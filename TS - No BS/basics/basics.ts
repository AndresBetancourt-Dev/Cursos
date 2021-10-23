"use strict"
//Strings
let userName: string = "Andrés Betancourt";
userName += " Santana";

//Booleans
let hasLoggedIn : boolean = true;

//Any type
let anything : any = "Anything";

//Number
let age : number = 21;

//Regular Expression
let regex : RegExp = /foo/;

//Anything can asume from string to Object
anything = {
    userName,
    age,
    hasLoggedIn
};

//Arrays as java
const names : string[] = userName.split(" ");
const numbers : number[] = [123,456,789];
const objects : object = {names,numbers};

let objectsArray : object[] = [
    objects,
    names,
    numbers,
    anything
];

//Using Array Object
let auxiliarObjectsArray : Array<object> = [
    objects,
    names,
    numbers,
    anything
];

const values : Array<number> = [6,5,4];
const regularExpressions : Array<RegExp> = [/foo/,/bar/];



console.log("The regular expression is : "+regularExpressions[0].test("bar"));
console.log(regularExpressions);


//Creating interface for defining a type definition
interface Person {
    firstName : string,
    lastName : string
}

//Now i create my Persons based on my type
const person : Person  = {
    firstName : "Andrés",
    lastName : "Betancourt"
}
const personTwo : Person  = {
    firstName : "Mary Luz",
    lastName : "Santana"
}

//Records 
//Here i said that i want the key to be a number
//And the value to be a string
const ids : Record<number,string> = {
    10 : "a",
    20 : "b"
};
ids[30] = "c";
const hashMap : Record<string,string> = {
    "key1" : "key1",
    "key2" : "key2"
};


//Defining Array Of Interface
const persons : Person[] = [person,personTwo];
const personsTwo : Array<Person> = [person,personTwo];

persons.forEach((person : Person) => console.log(person));

for(let i : number = 0; i<10;i++){
   console.log(i); 
}; //Not neccesary typescript automatically infers the type

//Bug, Typescript does not strictly check if Record key and value are from the specified type
const records : Array<Record<number,string>> = [ids,hashMap];

/**
 * In conclusion
 * types are
 * number
 * string
 * boolean
 * any
 * object
 * 
 * Object Types 
 * 
 * Array
 * Record<key,value>
 * RegExp
 * 
 * To create custom types
 * use reserved word
 * 
 * interface NewType {
 * ...definition,
 * };
 * 
 * Arrays can be defined two ways
 * 
 * number[]
 * Array<number>
 * 
 * 
 */