import { heroes } from "../data/heroes";

export const getHeroById = (id) => heroes.find((hero) => hero.id === id);
export const getHeroesByUniverse = (universe) =>
  heroes.filter((hero) => hero.owner === universe);
export const getHeroesByName = (input) =>
  heroes.filter((hero) => hero.name.includes(input));
