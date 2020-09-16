import React from "react";
import { connect } from "react-redux";
import { getTututorial } from "./asyncActions";

const mapStateToProps = ({ tutorial }) => ({
  tutorial: tutorial.tutorial,
  steps: tutorial.steps,
  error: tutorial.errorMessage,
  isLoading: tutorial.isLoading,
});

const mapDispatchToProps = {
  loadData: getTututorial,
};

const TutorialComponent = ({
  tutorial,
  steps,
  error,
  isLoading,
  loadData,
  tutorialId,
}) => {
  console.log("tutorialId", tutorialId);
  React.useEffect(() => {
    if (!!tutorialId) loadData(tutorialId);
  }, [tutorialId]);

  if (isLoading) {
    return <h2>Загрузка</h2>;
  }

  if (error) {
    return <h2>{`Ошибка ${error}`}</h2>;
  }

  return (
    <div>
      <h2>{tutorial.title}</h2>
      <p>{tutorial.description}</p>
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

export const TutorialModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(TutorialComponent);
