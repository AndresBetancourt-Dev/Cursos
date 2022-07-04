import { connectDatabase, insertDocument } from "../../../helpers/db-util";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;
    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }

    let client;
    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Database Connection Failed" });
      return;
    }

    try {
      await insertDocument(client,"newsletter", { email });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Inserting Failed" });
      return;
    }

    res.status(201).json({
      message: "E-mail registered successfully",
      email,
    });
  }
}

export default handler;
