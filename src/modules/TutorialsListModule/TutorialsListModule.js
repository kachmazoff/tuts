import React from "react";
import { connect } from "react-redux";
import { getTutsList } from "./asyncActions";
import { TutorialsList } from "../../components";

const mapStateToProps = ({ tutorialsList }) => ({
  tuts: tutorialsList.tuts,
  error: tutorialsList.errorMessage,
  isLoading: tutorialsList.isLoading,
});

const mapDispatchToProps = {
  loadTutsList: getTutsList,
};

const TutorialListComponent = ({ tuts, error, isLoading, loadTutsList }) => {
  return (
    <div>
      <p>
        <button onClick={loadTutsList}>Refresh</button>
      </p>
      {!!error && <p>{error}</p>}
      {isLoading && <p>Загрузка</p>}
      <TutorialsList tuts={tuts} />
    </div>
  );
};

export const TutorialsListModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(TutorialListComponent);
