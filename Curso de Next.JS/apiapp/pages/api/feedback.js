import fs from "fs";
import path from "path";

export function buildFeedbackPath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

export function extractFeedback(filePath) {
  const fileData = fs.readFileSync(filePath);
  return JSON.parse(fileData);
}

function handler(req, res) {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  console.log(data);
  if (req.method === "POST") {
    const { email, feedback } = req.body;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      feedback,
    };

    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));

    return res.status(201).json({
      message: "Feedback created successfully",
      feedback: newFeedback,
    });
  }

  return res
    .status(200)
    .json({ message: "Feedback created successfully", data });
}

export default handler;
