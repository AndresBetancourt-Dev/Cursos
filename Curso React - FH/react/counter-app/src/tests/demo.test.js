describe("Pruebas en el archivo demo.test.js", () => {
  test("It must be workingw", () => {
    const isWorking = true;

    if (!isWorking) {
      throw new Error("It isn't working ");
    }
  });

  test("Stings must be equal", () => {
    const message = "This is sparta!!!";
    const messageTwo = "This is sparta!!!";

    expect(message).toBe(messageTwo);
  });
});

/* Can Tests */
const can = {
  name: "marinara",
  ounces: 12,
};

const REGULATED_OUNCES = 12;
const PIZZA_SAUCE = "marinara";

describe("The Can", () => {
  test("Must be 12 Ounces", () => {
    expect(can.ounces).toBe(REGULATED_OUNCES);
  });

  test("Must Be Pizza Sauce", () => {
    expect(can.name).toBe(PIZZA_SAUCE);
  });
});
