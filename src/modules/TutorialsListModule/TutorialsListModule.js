import React from "react";
import { connect } from "react-redux";
import { deleteTutorial, getTutsList } from "./asyncActions";
import { TutorialsList } from "../../components";

const mapStateToProps = ({ tutorialsList }) => ({
  tuts: tutorialsList.tuts,
  error: tutorialsList.errorMessage,
  isLoading: tutorialsList.isLoading,
});

const mapDispatchToProps = {
  loadTutsList: getTutsList,
  onDelete: deleteTutorial,
};

const TutorialListComponent = ({
  tuts,
  error,
  isLoading,
  loadTutsList,
  onDelete,
}) => {
  return (
    <div>
      <p>
        <button onClick={loadTutsList}>Refresh</button>
      </p>
      {!!error && <p>{error}</p>}
      {isLoading && <p>Загрузка</p>}
      <TutorialsList tuts={tuts} onDelete={onDelete} />
    </div>
  );
};

export const TutorialsListModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(TutorialListComponent);
