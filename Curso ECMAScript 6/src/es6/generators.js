function* runInMultipleSteps() {
  let age = 10; //This variable persists during the whole execution
  console.log(`The age is ${age}`);
  yield age++;
  console.log(
    `A year has passed you are growing up so fast, your are now ${age}`
  );
  yield age++;

  console.log(`This is the final year, you're now ${age}`);
  yield age++;
}

//Generators are basically functions that run small bits of code per run
const myGenerator = runInMultipleSteps(); //<- I instanciate my generator

myGenerator.next(); // I execute first part of the code
