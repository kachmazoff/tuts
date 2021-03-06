import React from "react";
import { Container } from "../Container";
import { TutorialStepForm } from "../TutorialStepForm";
import styles from "./styles.module.css";

export const TutorialStepsFormList = ({ steps, onChange, onRemove, onAdd }) => {
  return (
    <div>
      {steps.map((step, index) => (
        <TutorialStepForm
          key={`${steps.length}#${index}`}
          model={step}
          index={index}
          onChange={onChange}
          onRemove={onRemove}
        />
      ))}
      <Container>
        <button className={styles.add_step} onClick={onAdd}>
          Добавить шаг
        </button>
      </Container>
    </div>
  );
};
