import { expect } from "@jest/globals";
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Tests in Heroes API", () => {
  test("Test in getHeroesById", () => {
    const id = "1";
    const hero = getHeroeById(id);
    const heroData = heroes.find((h) => h.id === id);

    expect(hero).toEqual(heroData);
  });

  test("Test in getHeroesById not Exists", () => {
    const id = "10";
    const hero = getHeroeById(id);
    expect(hero).toBeUndefined();
  });

  test("Test in getHeroesByOwner have same lenght, be equal [DC]", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);
    const heroesData = heroes.filter((hero) => hero.owner === owner);
    expect(heroes).toEqual(heroesData);
    expect(heroes).toHaveLength(heroesData.length);
    expect(heroes).toStrictEqual(heroesData);
  });

  test("Test in getHeroesByOwner have same lenght, be equal [Marvel]", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);
    const heroesData = heroes.filter((hero) => hero.owner === owner);

    expect(heroes.length).toBe(2);
    expect(heroes).toHaveLength(heroesData.length);
  });
});
