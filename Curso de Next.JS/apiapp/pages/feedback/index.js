import React, { useState } from "react";
/**
 * As said early i can use node.js code with NextJS
 * this functions uses path and fs that are node.js libraries
 */
import { buildFeedbackPath, extractFeedback } from "../api/feedback";

const FeedbackPage = ({ feedbacks = [] }) => {
  const [feedbackData, setFeedbackData] = useState();

  /**
   * Function to call a specific feedback page
   * /api/:feedbackId
   */
  function loadFeedbackHandler(id) {
    fetch(`/api/${id}`)
      .then((response) => response.json())
      .then((data) => setFeedbackData(data.feedback));
  }

  return (
    <>
      {feedbackData && (
        <p>
          <b>{feedbackData.email} </b>: {feedbackData.feedback}{" "}
        </p>
      )}
      <ul>
        {feedbacks.map((item) => (
          <li key={item.id}>
            {item.feedback}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export async function getStaticProps() {
  /*  We should'nt use fetch here
    fetch("/api/feedback")
    .then((response) => response.json())
    .then((res) => setFeedbacks(res.data)); */

  const filePath = buildFeedbackPath();
  const feedbacks = extractFeedback(filePath);

  console.log(feedbacks);

  /**
   * Get feedbacks from node.js function calls
   * revalidate them each 10 seconds (clears cached Static Site Generation)
   */

  return {
    props: {
      feedbacks,
    },
    revalidate: 10,
  };
}

export default FeedbackPage;
