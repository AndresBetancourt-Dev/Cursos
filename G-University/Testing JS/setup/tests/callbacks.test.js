const calculateSquare = require("../public/javascripts/callbacks");

describe("Test calculate Square Function", () => {
  it("Should return expected result if passed a valid input", () => {
    calculateSquare(3, (error, result) => {
      expect(result).toBe(9);
    });
  });

  it("Should return expected result if passed a valid input", (done) => {
    calculateSquare(2, (error, result) => {
      expect(result).toBe(4);
      done();
    });
  });

  it("Should return an error if passed a invalid input", (done) => {
    calculateSquare("string", (error, result) => {
      expect(error).not.toBeNull();
      expect(error.message).toEqual('Argument of type number is expected');
      done();
    });
  });
});
