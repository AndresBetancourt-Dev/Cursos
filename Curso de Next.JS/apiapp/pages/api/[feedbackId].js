import { buildFeedbackPath, extractFeedback } from "./feedback";

function handler(req, res) {
  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);

  const selectedFeedback = feedbackData.find(feedback => feedback.id === feedbackId);

  return res.status(selectedFeedback ? 200 : 400).json({
    feedback : selectedFeedback
  })
}

export default handler;