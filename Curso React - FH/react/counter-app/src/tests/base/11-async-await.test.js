import { describe, test, expect } from "@jest/globals";
import { getImagen } from "../../base/11-async-await";

describe("Giphy API Tests", () => {
  test("Giphy getImagen Test", async () => {
    const url = await getImagen();

    expect(typeof url).toBe("string");
    expect(url.includes("https")).toBeTruthy();
    console.log(url);
    expect(url).toMatch(/https:\/\/media[0-9].giphy.com\/media\//);
  });
});
