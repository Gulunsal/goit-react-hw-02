import React from 'react';
import styles from './Options.module.css';

function Options({ onFeedback, onReset, hasFeedback }) {
  return (
    <div className={styles.optionsContainer}>
      <button className={styles.button} onClick={() => onFeedback('good')}>Good</button>
      <button className={styles.button} onClick={() => onFeedback('neutral')}>Neutral</button>
      <button className={styles.button} onClick={() => onFeedback('bad')}>Bad</button>
      {hasFeedback && (
        <button className={styles.button} onClick={onReset}>Reset</button>
      )}
    </div>
  );
}

export default Options;
