//Function Parameters
//Callback has implicity of any type if not defined
// : () => [return value] type of callback

//Interfaces
interface Identification {
  id: string;
  location: string;
}

interface Person {
  name: string;
  age: number;
  identifications: Identification[];
}

interface GeoLocation {
  latitude: number;
  longitude: number;
  country: string;
  city: string;
  town: string;
  neighborhood: string;
  altitude: number;
  additionalProperties: any[];
}

interface Animal {
  weight: number;
  name: string;
  description: string;
  properties: Record<string, any>[];
}

//Types
type Persons = Person[];
type Animals = Array<Animal>;
type VoidFunction = () => void;
type MutationFunction = (n: number) => number;

const persons: Persons = [];
const animals: Animals = [];

export function printToFile(text: string, callback: VoidFunction): void {
  console.log(text);
  callback();
}

export const printCallbackText: VoidFunction = () =>
  console.log("This text also will be printed");
console.log("This text will be printed", printCallbackText);

export function arrayMutate(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate);
}

export const multiplyBy10: MutationFunction = (n: number) => n * 10;

console.log(arrayMutate([1, 20, 305, 45], multiplyBy10));

//Returning functions - using Closures
type AdderFunction = (val: number) => number;
export function createAdder(num: number): AdderFunction {
  //Closure = num
  return (val: number) => num + val;
}

const FIRST_VALUE = 100;
const addOne = createAdder(FIRST_VALUE);
console.log(addOne(55));

//Closures Review
function creaFunc(): VoidFunction {
  let nombre: string = "Mozilla";
  function muestraNombre(): void {
    console.log(nombre);
  }
  return muestraNombre;
}

var miFunc: VoidFunction = creaFunc();
miFunc();
