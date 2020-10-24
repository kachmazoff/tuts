import React from "react";
import { connect } from "react-redux";
import { deleteTutorial, getTutsList } from "./asyncActions";
import { Container, TutorialsList } from "../../components";

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
  React.useEffect(() => {
    if (!tuts || tuts.length === 0) {
      loadTutsList();
    }
  }, []);

  return (
    <Container>
      <p>
        <button onClick={loadTutsList}>Refresh</button>
      </p>
      {!!error && <p>{error}</p>}
      {isLoading && <p>Загрузка</p>}
      <TutorialsList tuts={tuts} onDelete={onDelete} tutsOnRow={3} />
    </Container>
  );
};

export const TutorialsListModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(TutorialListComponent);
