import { hashPassword } from "../../../lib/auth";
import { connectDatabase } from "../../../lib/database";

async function handler(req, res) {
  /*
    Access data by abstracting from body
   */
  if (req.method !== "POST") {
    res.status(405).json({
      message: "Method not allowed",
    });
    return;
  }

  const { email, password } = req.body;

  if (!email || !email.includes("@") || !password || !password.length > 6) {
    res.status(422).json({
      message:
        "Invalid input - Password should also be at least 7 Characters long",
    });
    return;
  }

  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({
      message: "Error Connecting Database",
    });
    return;
  }

  const database = client.db();

  const existingUser = await database.collection("users").findOne({
    email: email,
  });

  console.log(existingUser);

  if (existingUser) {
    res.status(422).json({
      message: "User already exists",
    });
    client.close();
    return;
  }

  const hasedPassword = await hashPassword(password);

  const result = await database.collection("users").insertOne({
    email,
    password: hasedPassword,
  });

  res.status(201).json({
    message: "User Created Successfully",
    result,
  });

  client.close();
}

export default handler;
