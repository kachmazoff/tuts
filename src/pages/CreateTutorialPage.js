import React from "react";
import { Link } from "react-router-dom";
import { BasePage } from "../components";
import { CreateTutorialModule } from "../modules";

export const CreateTutorialPage = () => {
  return (
    <BasePage title="Создание туториала">
      <div>
        <Link to="/">На главную</Link>
      </div>
      <CreateTutorialModule />
    </BasePage>
  );
};
