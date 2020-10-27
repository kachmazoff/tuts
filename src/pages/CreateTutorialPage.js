import React from "react";
import { BasePage } from "../components";
import { CreateTutorialModule } from "../modules";
import { AccessChecker } from "../modules/AuthModule/AccessChecker";

export const CreateTutorialPage = () => {
  return (
    <BasePage title="Создание туториала">
      <AccessChecker redirectPath="/signin">
        <CreateTutorialModule />
      </AccessChecker>
    </BasePage>
  );
};
