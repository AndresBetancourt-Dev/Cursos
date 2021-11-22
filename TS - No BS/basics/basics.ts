//Strings
let userName: string = "Andrés Betancourt";
userName += " Santana";

//Booleans
let hasLoggedIn: boolean = true;

//Any type - Not Recommended
let anything: any = "Anything";

//Number
let age: number = 21;

//Regular Expression
let regex: RegExp = /foo/;

//Anything can asume from string to Object
anything = {
  userName,
  age,
  hasLoggedIn,
};

//Arrays as java
const names: string[] = userName.split(" ");
const numbers: number[] = [123, 456, 789];

//Object type
const objects: object = { names, numbers };

//Object Array
let objectsArray: object[] = [objects, names, numbers, anything];

//Using Array Object prototype instead of Java like usage
let auxiliarObjectsArray: Array<object> = [objects, names, numbers, anything];

//Array of Numbers
const values: Array<number> = [6, 5, 4];

//Array of Regular Expressions
const regularExpressions: Array<RegExp> = [/foo/, /bar/];

//Test the regular expression at position [0]
console.log("The regular expression is : " + regularExpressions[0].test("bar"));
console.log(regularExpressions);

//Creating interface for defining a type definition
interface Person {
  firstName: string;
  lastName: string;
}

//Now i create my Persons based on my type
const person: Person = {
  firstName: "Andrés",
  lastName: "Betancourt",
};
const personTwo: Person = {
  firstName: "Mary Luz",
  lastName: "Santana",
};

//Records
//Here i said that i want the key to be a number
//And the value to be a string
const ids: Record<number, string> = {
  10: "a",
  20: "b",
};
ids[30] = "c";

//Records with string value and string key
const hashMap: Record<string, string> = {
  key1: "key1",
  key2: "key2",
};

//Record with key string and Person interface as value
const hashObject: Record<string, Person> = {
  askjkds82984984432332: {
    firstName: "Andrés",
    lastName: "Betancourt",
  },
};

console.log(hashObject);
console.log(Object.keys(hashObject));

//Defining Array Of Interface, Array of a Defined Interface both ways
const persons: Person[] = [person, personTwo];
const personsTwo: Array<Person> = [person, personTwo];

//Array methods with type definition
persons.forEach((person: Person) => console.log(person));

//Type definition in iterator in for loop
for (let i: number = 0; i < 10; i++) {
  console.log(i);
} //Not neccesary typescript automatically infers the type

//Bug, Typescript does not strictly check if Record key and value are from the specified type
const records: Array<Record<number, string>> = [ids, hashMap];
const recordsObjects: Array<Record<string, Person>> = [hashObject, hashObject];
console.log(recordsObjects);
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
 * [key] : [type]
 * };
 *
 * Arrays can be defined two ways
 *
 * number[]
 * Array<number>
 *
 *
 */
