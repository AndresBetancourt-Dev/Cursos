// Template String

import { heroes } from "./data/heroes";
import {
  getHeroById,
  getHeroesByName,
  getHeroesByUniverse,
} from "./functions/heroesFunctions";

const message = "No a la reducción de la población";

const getCurrentMessage = (m) => {
  return m + ".";
};

console.log(`El mensaje es : ${getCurrentMessage(message)}`);

//Clone Objects
let person = {
  name: "Andres",
  age: 20,
  address: {
    lat: -45.54545422,
    long: 7.542655644,
    street: "Carrera 40C",
    zip: 760000,
  },
};

let personTwo = { ...person };
console.table(personTwo);

//Desestructuración

const {
  address: { lat, long, street },
} = person;

console.log(lat, long, street);

//Desestructuración Arreglos
let characters = ["Goku", "Vegeta", "Trunks"];

const [, , trunks] = characters;
console.log(trunks);

const $useState = (value) => {
  return [value, (newValue) => (value = newValue)];
};

const [nombre, setNombre] = $useState("Goku");

console.log("Current state : " + nombre);
setNombre("Vegeta");
console.log("New State", nombre);

console.log(getHeroesByName("man"));
console.log(getHeroesByUniverse("Anime"));
console.log(getHeroById(Math.floor(heroes.length / 2).toString()));
