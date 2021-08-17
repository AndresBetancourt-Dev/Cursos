import { getUser, getUsuarioActivo } from "../../base/05-funciones";

const USER = {
  uid: "ABC123",
  username: "El_Papi1502",
};

describe("Tests in 05-funciones.js", () => {
  test("Test in getUser", () => {
    const user = getUser();
    expect(user).toEqual(USER);
    expect(user).toStrictEqual(USER);
  });
  test("Test in getUsuarioActivo", () => {
    const name = "Andrés";
    const user = getUsuarioActivo(name);
    expect(user).toStrictEqual({ uid: "ABC567", username: name });
  });
});
