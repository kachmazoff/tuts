import React from "react";
import { connect } from "react-redux";
import { Tutorial } from "../../components";
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

  // TODO: Вынести в отдельный компонент
  return (
    <Tutorial
      title={tutorial.title}
      description={tutorial.description}
      steps={steps}
    />
  );
};

export const TutorialModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(TutorialComponent);
