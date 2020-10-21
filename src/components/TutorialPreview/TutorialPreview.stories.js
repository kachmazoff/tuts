import React from "react";
import { BrowserRouter } from "react-router-dom";
import { TutorialPreview } from "./TutorialPreview";

export default {
  title: "TutorialPreview",
  component: TutorialPreview,
};

const tutorialMock = {
  title: "Some title",
  description: "Description",
};

export const tutorialPreview = () => (
  <BrowserRouter>
    <TutorialPreview tutorial={tutorialMock} />
  </BrowserRouter>
);
