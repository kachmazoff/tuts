import React from "react";
import { TutorialStepForm } from "../TutorialStepForm";

export const TutorialStepsFormList = ({ steps, onChange, onRemove }) => {
  return (
    <div>
      {steps.map((step, index) => (
        <TutorialStepForm
          key={index}
          model={step}
          index={index}
          onChange={onChange}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};
