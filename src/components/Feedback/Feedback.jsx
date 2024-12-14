import React from "react";
import css from "./Feedback.module.css";

const Feedback = ({ feedback, positiveFeedback, totalFeedback }) => {
  return (
    <ul className={css.flexFeedback}>
      <li>Good: {feedback.good}</li>
      <li>Neutral: {feedback.neutral}</li>
      <li>Bad: {feedback.bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;