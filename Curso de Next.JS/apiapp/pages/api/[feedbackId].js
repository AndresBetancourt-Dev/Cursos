import { buildFeedbackPath, extractFeedback } from "./feedback";

/**
 * This one is a little bit more interesting
 * first [feedbackId].js notice the file extension it means that it expects a dynamic route a.k.a called feedbackId
 * /api/:feedbackId is kinda what it looks like
 */
function handler(req, res) {
  /**
   * Here i retrieve that feedbackId using request query
   */
  const feedbackId = req.query.feedbackId;
  /**
   * Same logic to retrieve fileData
   */
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);

  /**
   * Here i search if the specified feedback exist in that array
   * depending on it i will return a different HTTP code response
   */
  const selectedFeedback = feedbackData.find(feedback => feedback.id === feedbackId);

  return res.status(selectedFeedback ? 200 : 400).json({
    feedback : selectedFeedback
  })
}

export default handler;