import { expect } from "@jest/globals";
import { retornaArreglo } from "../../base/07-deses-arr";

describe("Tests in retornoArreglo", () => {
  test("Test data coming from retornaArreglo, must be string and number", () => {
    const [letters, numbers] = retornaArreglo();
    const nullable = null;

    expect(typeof letters).toBe("string");
    expect(typeof numbers).toBe("number");
    expect(letters).toEqual("ABC");
    expect(letters).toBe("ABC");
    expect(numbers).toBeCloseTo(122.95, 1);
    expect(numbers).not.toBe("123");
    expect(typeof letters).toEqual("string");
    expect(typeof numbers).toEqual("number");

    expect(typeof letters).toStrictEqual("string");
    expect(typeof numbers).toStrictEqual("number");

    expect(nullable).toBeNull();
  });
});
