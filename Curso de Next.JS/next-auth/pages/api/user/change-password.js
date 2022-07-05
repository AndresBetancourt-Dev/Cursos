import { getSession } from "next-auth/client";
import { hashPassword, verifyPassword } from "../../../lib/auth";
import { connectDatabase } from "../../../lib/database";

async function handler(req, res) {
  //Check HTTP Method
  if (req.method !== "PATCH") {
    res.status(405).json({
      message: "Method not Allowed",
    });
    return;
  }

  const session = await getSession({ req: req });

  if (!session) {
    res.status(401).json({
      message: "Not Authenticated",
    });
    return;
  }

  const { email } = session?.user;
  const { oldPassword, newPassword } = req.body;

  const client = await connectDatabase();
  const usersCollection = client.db().collection("users");
  const user = await usersCollection.findOne({
    email,
  });

  if (!user) {
    res.status(404).json({
      message: "User not found",
    });
    client.close();
    return;
  }

  const currentPassword = user.password;
  const passwordsAreEqual = await verifyPassword(oldPassword, currentPassword);

  if (!passwordsAreEqual) {
    res.status(422).json({
      message: "Not Authorized for this operation, Invalid Password",
    });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(newPassword);

  const result = await usersCollection.updateOne(
    {
      email,
    },
    {
      $set: {
        password: hashedPassword,
      },
    }
  );

  client.close();
  res.status(200).json({
    message: "Password Updated",
    result,
  });
}

export default handler;
