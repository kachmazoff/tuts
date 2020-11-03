import React from "react";
import { connect } from "react-redux";
import { deleteTutorial, getTutsList } from "./asyncActions";
import { Container, Tutorials, TutorialsList } from "../../components";

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
  ListComponent,

  ...rest
}) => {
  React.useEffect(() => {
    if (!tuts || tuts.length === 0) {
      loadTutsList();
    }
  }, []);

  return (
    <Container>
      {/* <p>
        <button onClick={loadTutsList}>Refresh</button>
      </p> */}
      {!!error && <p>{error}</p>}
      {isLoading && <p>Загрузка</p>}
      {/* <TutorialsList
        title={title}
        tuts={tuts}
        onDelete={onDelete}
        tutsOnRow={3}
      /> */}
      <ListComponent items={tuts} {...rest} />
    </Container>
  );
};

TutorialListComponent.defaultProps = {
  ListComponent: Tutorials,
};

export const TutorialsListModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(TutorialListComponent);
