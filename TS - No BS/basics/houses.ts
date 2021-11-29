/**
 * House interface
 */
/**
 * House with Id Interface
 */

import houses from "./houses.data";

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithId {
  id: number;
  name: string;
  planets: string | string[];
}

/**
 *
 * Function Overloading Find Houses
 */

type HouseFilter = (house: House) => boolean;
const defaultFilter: HouseFilter = ({ name }: House) => name === "Atreides";

function findHouses(houses: string): HouseWithId[];
function findHouses(houses: string, filter: HouseFilter): HouseWithId[];
function findHouses(houses: House[]): HouseWithId[];
function findHouses(houses: House[], filter: HouseFilter): HouseWithId[];
function findHouses(
  input: string | House[],
  filter?: HouseFilter
): HouseWithId[] {
  let houses: House[] = typeof input === "string" ? JSON.parse(input) : input;

  return (filter ? houses.filter(filter) : houses).map((house) => ({
    id: houses.indexOf(house),
    ...house,
  }));
}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);
console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
console.log(findHouses(houses, ({ planets }) => planets[0] === "Kaitan"));
console.log(findHouses(houses));
