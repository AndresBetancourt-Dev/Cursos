const { MongoClient } = require("mongodb");

describe("User Service", () => {
  let connection;
  let database;

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
    });

    database = await connection.db("university-jest-training");
  });

  afterAll(async () => {
    await connection.close();
  });

  it("Should check if user record was inserted successfully", async () => {
    const mockUserData = {
      id: new Date().getTime(),
      firstName: "Test",
      lastName: "Test",
      email: "test@demo.com",
    };

    const users = database.collection("users");
    await users.insertOne(mockUserData);
    const insertedUser = await users.findOne({ id: mockUserData.id });
    expect(insertedUser).toEqual(mockUserData);
  });
});
