import { Car } from "./Car";

let myCar1 = new Car("Cool Car Company", "blue", 2); // Instantiates the Car object with all parameters

console.log(myCar1.color);
console.log(myCar1._color);

let myCar2 = new Car('Galaxy Motors', 'red', 4);
let myCar3 = new Car('Galaxy Motors', 'gray');
console.log(myCar3.doors);  // returns 4, the default value

console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
console.log(myCar1.turn('right'));