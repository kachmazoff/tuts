import React from "react";
import { BasePage } from "../components";
import { TutorialModule } from "../modules/TutorialModule";

export const TutorialPage = ({ match }) => {
  console.log("props", match.params.id);
  return (
    <BasePage title="Tutorial">
      <TutorialModule tutorialId={match.params.id} />
    </BasePage>
  );
};
