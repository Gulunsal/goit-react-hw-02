// Feedback.jsx
import React from 'react';
import styles from './Feedback.module.css';

function Feedback({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={styles.feedbackContainer}>
      <p className={styles.stat}>Good: {good}</p>
      <p className={styles.stat}>Neutral: {neutral}</p>
      <p className={styles.stat}>Bad: {bad}</p>
      <p className={styles.stat}>Total: {total}</p>
      <p className={styles.stat}>Positive: {positivePercentage}%</p>
    </div>
  );
}

export default Feedback;
