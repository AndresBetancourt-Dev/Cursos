import React, { useState } from "react";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";

const FeedbackPage = ({ feedbacks = [] }) => {
  const [feedbackData, setFeedbackData] = useState();

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

  return {
    props: {
      feedbacks,
    },
    revalidate: 10,
  };
}

export default FeedbackPage;
