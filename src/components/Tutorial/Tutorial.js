import React from "react";
import styles from "./styles.module.css";
import { TutorialStep } from "./TutorialStep";

export const Tutorial = ({ title, description, steps }) => {
  return (
    <div className={styles.wrapper}>
      <h2>{title}</h2>
      <p>{description}</p>
      {steps.length === 0 && <p>Нет ни одного шага(</p>}
      {steps.length > 0 &&
        steps.map((step) => (
          <TutorialStep
            step={step}
            key={`${step.id}_${step.index}`}
            indexNumber={step.index}
          />
        ))}
    </div>
  );
};
