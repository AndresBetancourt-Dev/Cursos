function getArrayBad(items: any[]): any[] {
  return new Array().concat(items);
}

let numberArrayBad = getArrayBad([5, 10, 15, 20]);
let stringArrayBad = getArrayBad(["Cats", "Dogs", "Birds"]);
numberArrayBad.push(25); // OK
stringArrayBad.push("Rabbits"); // OK
numberArrayBad.push("This is not a number"); // OK
stringArrayBad.push(30); // OK
console.log(numberArrayBad); // [5, 10, 15, 20, 25, "This is not a number"]
console.log(stringArrayBad); // ["Cats", "Dogs", "Birds", "Rabbits", 30]

function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25); // OK
//numberArray.push("This is not a number"); // Generates a compile time type check error


let stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits"); // OK
//stringArray.push(30); // Generates a compile time type check error
