const functions = require("../public/javascripts/functions");

describe("Sum Function", () => {
  it("adds properly", () => {
    expect(functions.sum(1, 2)).toBe(3);
  });
  //it is an alias for test function
});

describe("Substract Function", () => {
  it("substracts properly", () => {
    expect(functions.substract(1, 2)).toBe(-1);
  });
});

describe("CloneArray Function", () => {
  it("copies array properly", () => {
    const array = [1, 2, 3, 4, 5];
    expect(functions.copyArray(array)).toEqual(array);
  });

  it("copies array properly", () => {
    const array = [1, 2, 3, 4, 5];
    expect(functions.copyArray(array)).toStrictEqual(array);
  });

  it("does not copy reference", () => {
    const array = [1, 2, 3, 4, 5];
    expect(functions.copyArray(array)).not.toBe(array);
  });
});

//Will only execute this group, rest of groups will be skipped
/* describe.only("CloneArray Function", () => {

    it("does not copy reference", () => {
        const array = [1, 2, 3, 4, 5];
        expect(functions.copyArray(array)).not.toBe(array);
      });
});
 */

//Will skip  this group, rest of groups will be skipped
/* describe.skip("CloneArray Function", () => {

    it("does not copy reference", () => {
        const array = [1, 2, 3, 4, 5];
        expect(functions.copyArray(array)).not.toBe(array);
      });
});
 */
