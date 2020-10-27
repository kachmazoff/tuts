import React from "react";
import styles from "./styles.module.css";

export const TutorialStep = ({ step, indexNumber }) => {
  return (
    <div className={styles.step_wrapper}>
      <h3>
        <span className={styles.index_number}>{`Шаг ${indexNumber}. `}</span>
        {`${step.title}`}
      </h3>
      <p className={styles.body_text}>{step.body}</p>
    </div>
  );
};
