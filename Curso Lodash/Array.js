/* Chunk 
Returns a chunk of the Array within specified N
*/
let groupOne = ["Andrés", "Maria", "Luis", "Carolina", "Catalina", "Santiago"];
let groupTwo = ["Andrés", "Catalina", "Santiago"];
let groupOfPeople = [
  { firstName: "Andrés", age: 21 },
  { firstName: "Maria", age: 21 },
  { firstName: "Hernando", age: 21 },
  { firstName: "Mary", age: 21 },
  { firstName: "Hershey", age: 21 },
  { firstName: "G", age: 21 },
];

let groupOfPeopleTwo = [
  { firstName: "Andrés", age: 21 },
  { firstName: "Maria", age: 20 },
  { firstName: "Hernando", age: 23 },
  { firstName: "Mary", age: 24 },
  { firstName: "Hershey", age: 25 },
  { firstName: "G", age: 21 },
];

console.table(_.chunk(groupOne, 2));
console.table(_.chunk(groupOne, 3));
console.table(_.chunk(groupOne, 4));

/*

Compact 

*/

let groupOfNulls = [null, undefined, 0, 1, true, false, [], {}, "Andrés"];

console.warn(_.compact(groupOfNulls)); //Excludes null, undefined 0 and false

/*

Concat 

*/

console.log(_.concat(groupOfNulls, groupOne, groupOne, groupOne));

/*  Difference */

console.log(_.difference(groupOne, groupTwo));
console.log(_.differenceBy(groupOfPeople, groupOfPeopleTwo, "firstName"));

console.log(_.drop(groupOne, 5));
console.log(_.drop(groupOfPeople, 3));
console.log(_.dropRight(groupOne, 5));
console.log(_.dropRight(groupOfPeople, 3));

var users = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "pebbles", active: false },
  { user: "barney", active: true },
  { user: "barney", active: true },
];

console.table(
  _.dropRightWhile(users, function (o) {
    return !o.active;
  })
);
// => objects for ['barney']

const CONSTANT = 100;
console.table(_.fill(Array(10), CONSTANT));

console.log(users[_.findIndex(users, (e) => e.user === "barney")]);

{
  let thearray = [1, [2, [3, [4]], 5]];

  console.log(_.flattenDepth(thearray, 2));
}

{
  const asyncSave = async ({ type, complete }) => {
    await console.log(type, complete);
  };

  var saves = ["profile", "settings"];

  var done = _.after(saves.length, function () {
    console.log("done saving!");
  });

  _.forEach(saves, function (type) {
    asyncSave({ type: type, complete: done });
  });
}

function greet(greeting, punctuation) {
  return greeting + " " + this.user + punctuation;
}

var object = { user: "fred" };

var bound = _.bind(greet, object, "hi");
bound("!");
// => 'hi fred!'

// Bound with placeholders.
var bound = _.bind(greet, object, _, "!");
bound("hi");
// => 'hi fred!'
