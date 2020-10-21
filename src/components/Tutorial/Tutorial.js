import React from "react";

export const Tutorial = ({ title, description, steps }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      {steps.length === 0 && <p>Нет ни одного шага(</p>}
      {steps.length > 0 && (
        <ol>
          {steps.map((step) => (
            <li key={`${step.id}_${step.index}`}>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};
