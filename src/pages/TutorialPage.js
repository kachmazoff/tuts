import React from "react";
import { Link } from "react-router-dom";
import { BasePage } from "../components";
import { TutorialModule } from "../modules/TutorialModule";

export const TutorialPage = ({ match }) => {
  console.log("props", match.params.id);
  return (
    <BasePage title="Tutorial">
      <div>
        <Link to="/">На главную</Link>
      </div>
      <TutorialModule tutorialId={match.params.id} />
    </BasePage>
  );
};
