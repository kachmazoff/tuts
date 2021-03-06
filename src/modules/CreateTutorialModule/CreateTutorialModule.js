import React from "react";
import { connect } from "react-redux";
import { TutorialForm, TutorialStepsFormList } from "../../components";
import { actions, TOTAL_FORM_STEPS } from "./reducer";
import { createTutorial } from "./asyncActions";

const mapStateToProps = ({ createTutorial }) => ({
  creationStep: createTutorial.creationStep,
  isLoading: createTutorial.isLoading,
  title: createTutorial.title,
  description: createTutorial.description,
  steps: createTutorial.steps,
});

const mapDispatchToProps = {
  setTitle: actions.setTitle,
  setDescription: actions.setDescription,
  next: actions.incrementStep,
  addNewStep: actions.addNewStep,
  onChangeStep: actions.onChangeStep,
  onRemoveStep: actions.removeStep,
  onStart: actions.onStart,
  submit: createTutorial,
};

const CreateTutorialComponent = ({
  creationStep,
  isLoading,
  title,
  description,
  steps,
  addNewStep,
  onChangeStep,
  onRemoveStep, // TODO
  onStart,
  setTitle,
  setDescription,
  next,
  submit,
}) => {
  const isLastStep = creationStep + 1 === TOTAL_FORM_STEPS;
  React.useEffect(() => {
    onStart();
  }, []);

  return (
    <div>
      {/* {creationStep >= 0 && `Шаг ${creationStep + 1}`} */}
      {/* <h2>
        {creationStep === -1 && "Туториал успешно создан"}
        {creationStep === -2 && "Ошибка..."}
        {isLoading && <span>Загрузка..</span>}
      </h2> */}

      {creationStep === 0 && (
        <>
          <TutorialForm
            title={title}
            description={description}
            setTitle={setTitle}
            setDescription={setDescription}
          />
          <TutorialStepsFormList
            steps={steps}
            onChange={onChangeStep}
            onRemove={onRemoveStep}
            onAdd={addNewStep}
          />
        </>
      )}

      {creationStep >= 0 && (
        <p>
          <button onClick={!isLastStep ? next : submit}>
            {!isLastStep ? "Далее" : "Создать"}
          </button>
        </p>
      )}
    </div>
  );
};

export const CreateTutorialModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTutorialComponent);
