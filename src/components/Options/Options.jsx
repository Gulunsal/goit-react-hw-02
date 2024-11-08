// Options.jsx
import React from 'react';
import styles from './Options.module.css';

function Options({ onFeedback }) {
  return (
    <div className={styles.optionsContainer}>
      <button className={styles.button} onClick={() => onFeedback('good')}>Good</button>
      <button className={styles.button} onClick={() => onFeedback('neutral')}>Neutral</button>
      <button className={styles.button} onClick={() => onFeedback('bad')}>Bad</button>
      <button className={styles.button} onClick={() => onFeedback('reset')}>Reset</button>
    </div>
  );
}

export default Options;
