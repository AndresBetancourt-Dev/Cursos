//Strings
var userName = "Andrés Betancourt";
userName += " Santana";
//Booleans
var hasLoggedIn = true;
//Any type - Not Recommended
var anything = "Anything";
//Number
var age = 21;
//Regular Expression
var regex = /foo/;
//Anything can asume from string to Object
anything = {
    userName: userName,
    age: age,
    hasLoggedIn: hasLoggedIn
};
//Arrays as java
var names = userName.split(" ");
var numbers = [123, 456, 789];
//Object type
var objects = { names: names, numbers: numbers };
//Object Array
var objectsArray = [
    objects,
    names,
    numbers,
    anything
];
//Using Array Object prototype instead of Java like usage
var auxiliarObjectsArray = [
    objects,
    names,
    numbers,
    anything
];
//Array of Numbers
var values = [6, 5, 4];
//Array of Regular Expressions
var regularExpressions = [/foo/, /bar/];
//Test the regular expression at position [0]
console.log("The regular expression is : " + regularExpressions[0].test("bar"));
console.log(regularExpressions);
//Now i create my Persons based on my type
var person = {
    firstName: "Andrés",
    lastName: "Betancourt"
};
var personTwo = {
    firstName: "Mary Luz",
    lastName: "Santana"
};
//Records 
//Here i said that i want the key to be a number
//And the value to be a string
var ids = {
    10: "a",
    20: "b"
};
ids[30] = "c";
//Records with string value and string key
var hashMap = {
    "key1": "key1",
    "key2": "key2"
};
//Record with key string and Person interface as value
var hashObject = {
    "askjkds82984984432332": {
        firstName: "Andrés",
        lastName: "Betancourt"
    }
};
console.log(hashObject);
console.log(Object.keys(hashObject));
//Defining Array Of Interface, Array of a Defined Interface both ways
var persons = [person, personTwo];
var personsTwo = [person, personTwo];
//Array methods with type definition
persons.forEach(function (person) { return console.log(person); });
//Type definition in iterator in for loop
for (var i = 0; i < 10; i++) {
    console.log(i);
}
; //Not neccesary typescript automatically infers the type
//Bug, Typescript does not strictly check if Record key and value are from the specified type
var records = [ids, hashMap];
var recordsObjects = [hashObject, hashObject];
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
 * };
 *
 * Arrays can be defined two ways
 *
 * number[]
 * Array<number>
 *
 *
 */ 
