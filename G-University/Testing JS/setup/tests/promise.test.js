const calculateSquare = require("../public/javascripts/calculateSquare");

describe("Test calculate Square Function", () => {
  it("Should return expected result if passed a valid input", () => {
    return calculateSquare(3).then((result) => {
      expect(result).toBe(9);
    });
  });

  it("Should return expected result if passed a invalid input", () => {
    return calculateSquare("invalid").catch((error) => {
      expect(error.message).toBe("Argument of type number is expected");
    });
  });

  it("Should return expected result if passed a valid input", () => {
    return expect(calculateSquare(4)).resolves.toBe(16);
  });

  it("Should return expected result if passed a invalid input", () => {
    return expect(calculateSquare(true)).rejects.toMatchObject({
      message: "Argument of type number is expected",
    });
  });

  it("Should return expected result if passed a valid input", async () => {
    return expect(await calculateSquare(5)).toBe(25);
  });

  it("Should return expected result if passed a invalid input", async () => {
    try {
      await calculateSquare("invalid");
    } catch (error) {
      return expect(error).toMatchObject({
        message: "Argument of type number is expected",
      });
    }
  });
});
