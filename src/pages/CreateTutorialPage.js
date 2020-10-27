import React from "react";
import { BasePage } from "../components";
import { CreateTutorialModule } from "../modules";
import { authorizedOnlyHOC } from "../modules/AuthModule";

export const CreateTutorialPageBase = () => {
  return (
    <BasePage title="Создание туториала">
      <CreateTutorialModule />
    </BasePage>
  );
};

export const CreateTutorialPage = authorizedOnlyHOC(CreateTutorialPageBase);
