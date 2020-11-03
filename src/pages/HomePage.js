import React from "react";
import { BasePage, Courses, TutorialsList } from "../components";
import { TutorialsListModule } from "../modules";

export const HomePage = () => {
  return (
    <BasePage title="Главная">
      <Courses count={5} />
      <TutorialsListModule
        ListComponent={({ items }) => <TutorialsList tuts={items} />}
      />
    </BasePage>
  );
};
