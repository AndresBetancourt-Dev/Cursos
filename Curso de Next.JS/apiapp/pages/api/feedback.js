/**
 * The incredible feature of NextJS is that it allows me to use
 * Node JS Libraries such as filesystem and path
 */
import fs from "fs";
import path from "path";

/**
 * As seen here i make use of path.join function to get the current working directory
 * joined with `data` which is the folder and `feedback.json` which is the file
 */
export function buildFeedbackPath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

/**
 * With the filePath as paramether
 * @param filePath - is the path of the file where data is located
 * I'm able to retreat the data and return the data parsed to JavaScript Object Notation (JSON)
 * @return `fileData` - is the data from the file parsed to JSON
 */
export function extractFeedback(filePath) {
  const fileData = fs.readFileSync(filePath);
  return JSON.parse(fileData);
}

/**
 * `handler` function to handle the request done on
 * /api/feedback endpoint on self
 */
function handler(req, res) {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  /**
   * This if statement validates the request http method used
   * if it's POST it handles the data differently
   */
  if (req.method === "POST") {
    /**
     * When POST request the goal is to save a new feedback into the `feedback.json` file
     * I extract from request body the email and feedback
     */
    const { email, feedback } = req.body;

    /**
     * I create the object that will be saved in the file
     */
    const newFeedback = {
      id: new Date().toISOString(),
      email,
      feedback,
    };

    /**
     * I add the object to the array and the re-write synchronously the file with the new data
     */
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));

    /**
     * I return a request response that tells me that the Feeback was created successfully
     */
    return res.status(201).json({
      message: "Feedback created successfully",
      feedback: newFeedback,
    });
  }

  /**
   * Otherwise if the request method is not POST i will always say as response that the Feedback created successfully even if it's not
   */
  return res
    .status(200)
    .json({ message: "Feedback created successfully", data });
}

export default handler;
