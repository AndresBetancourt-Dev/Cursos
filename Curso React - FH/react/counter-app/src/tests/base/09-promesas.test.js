import { test, describe, expect, jest } from "@jest/globals";
import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

jest.setTimeout(10000);

describe("Pruebas Heroes Asincronas", () => {
  test("Test Heroes Asynchronous getHeroById", (done) => {
    const id = "1";
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual(heroes[0]);
      done();
    });
  });

  test("Test Heroes Asynchronous getHeroById Error", (done) => {
    const id = "10";
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
