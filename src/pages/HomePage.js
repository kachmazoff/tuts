import React from "react";
import { TutorialsListModule } from "../modules";
import { CreateTutorialModule } from "../modules/CreateTutorialModule/CreateTutorialModule";

export const HomePage = () => {
  return (
    <div>
      <h1>Home page</h1>
      <TutorialsListModule />
      <CreateTutorialModule />
    </div>
  );
};
