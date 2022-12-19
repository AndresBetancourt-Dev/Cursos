const calculateSquare = require("../public/javascripts/error");

describe("Test calculate Square Function", () => {
  test("Should calculate square", () => {
    expect(calculateSquare(5)).toBe(25);
  });

  test("Should throw an error if value is not a number", () => {
    expect(() => calculateSquare("xyz")).toThrow(
      "Argument of type number is expected"
    );
  });

  test("Should throw an error if value is undefined", () => {
    expect(() => calculateSquare()).toThrow(
      "Argument of type number is expected"
    );
  });
});
