import "@testing-library/jest-dom";
import { getSaludo } from "../../base/02-template-string";

describe("Test in 02-template-string.js", () => {
  test("getSaludo should Return Hola Andrés", () => {
    const NAME = "Andrés";
    const saludo = getSaludo(NAME);

    expect(saludo).toBe("Hola Andrés");
  });

  test("getSaludo without Default param must Return Hola Yurani", () => {
    const saludo = getSaludo();
    expect(saludo).toBe("Hola Yurani");
  });
});
