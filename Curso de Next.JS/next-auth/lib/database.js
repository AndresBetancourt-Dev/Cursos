import { MongoClient } from "mongodb";

const CONNECTION_URL = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.9uy93dw.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;

export async function connectDatabase() {
  const client = await MongoClient.connect(CONNECTION_URL);
  return client;
}
