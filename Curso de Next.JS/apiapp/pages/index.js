import styles from "../styles/Home.module.css";
import { useRef, useState } from "react";

export default function Home() {
  /**
   * Ref for inputs
   * ref.current.value
   */
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const [feedbacks, setFeedbacks] = useState([]);

  /**
   * Client side fetching for refetching feedbacks
   * this does not static generate in the rendered DOM
   */
  const loadFeedback = () => {
    fetch("/api/feedback")
      .then((response) => response.json())
      .then((res) => setFeedbacks(res.data));
  };

  /**
   * Function for submiting the form with the feedback
   */
  const submitFormHandler = (event) => {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const feedback = feedbackInputRef.current.value;

    const body = { email, feedback };

    /**
     * Fetch in the same endpoint of /api/feedbacks
     * to create a new feedback
     */
    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => console.log(res));

    /**
     * Reload feedbacks
     */
    loadFeedback();
  };

  /**
   * JSX with form, title, and list of feedbacks
   */
  return (
    <div className={styles.container}>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your E-mail address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feeback</label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
      <button onClick={loadFeedback}>Load Feedback</button>
      <ul>
        {feedbacks.map((item) => (
          <li key={item.id}>{item.feedback}</li>
        ))}
      </ul>
    </div>
  );
}
