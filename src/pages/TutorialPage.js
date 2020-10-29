import React from "react";
import { BasePage } from "../components";
import { TutorialModule } from "../modules/TutorialModule";

export const TutorialPage = ({ match }) => {
  return (
    <BasePage title="Tutorial">
      <TutorialModule tutorialId={match.params.id} />
    </BasePage>
  );
};
