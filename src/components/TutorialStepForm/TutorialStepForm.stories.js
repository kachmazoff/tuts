import React from "react";
import { TutorialStepForm } from "./TutorialStepForm";

export default {
  title: "TutorialStepForm",
  component: TutorialStepForm,
};

export const tutorialStepForm = () => <TutorialStepForm model={{}} index={1} />;
export const tutorialStepForm2 = () => (
  <TutorialStepForm model={{}} index={1} mini />
);
