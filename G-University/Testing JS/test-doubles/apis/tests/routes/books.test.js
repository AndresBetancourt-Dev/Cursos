const app = require("../../app");
const books = require("../../models/books");
const request = require("supertest");

describe("Testing APIs", () => {
  describe("GET API", () => {
    it("Should return 200", async () => {
      const response = await request(app).get("/books").expect(200);

      const result = response.body;

      expect(result).toHaveLength(2);
      expect(result[0]).toStrictEqual(books[0]);
    });
  });

  describe("POST API", () => {
    it("Should return 400", async () => {
      const response = await request(app).post("/books").expect(400);

      expect(response.body.message).toBe("Bad Request");
    });

    it("Should return 400", async () => {
      const response = await request(app)
        .post("/books")
        .send({ isbn: "918128121888", title: "Wimpy Kid" })
        .expect(200);

      expect(response.text).toBe("Book is added to the database");
    });
  });

  describe("PUT API", () => {
    it("Should return 200", async () => {
      const response = await request(app)
        .put("/books/65557567")
        .send({
          isbn: 65557567,
          title: "Eloquent Javascript",
          author: "Marijn Haverbeke",
          numOfPages: "372",
        })
        .expect(200);

      expect(response.text).toBe("Successfully Updated");
    });

    it("Should return 404", async () => {
      const response = await request(app)
        .put("/books/123123")
        .send({ isbn: "123123", title: "Eloquent Javascript" })
        .expect(404);

      expect(response.text).toBe(`Book with 123123 was not found`);
    });
  });

  describe("DELETE API", () => {
    it("Should return 200", async () => {
      const response = await request(app)
        .delete("/books/97815923275846")
        .expect(200);

      expect(response.text).toBe("Successfully Deleted");
    });

    it("Should return 404", async () => {
      const response = await request(app)
        .delete("/books/123123")
        .expect(404);

      expect(response.text).toBe(`Book with 123123 was not found`);
    });
  });
});
