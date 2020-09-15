import React from "react";
import { Link } from "react-router-dom";
import { BasePage } from "../components";
import { TutorialsListModule } from "../modules";

export const HomePage = () => {
  return (
    <BasePage title="Главная">
      <div>
        <Link to="/tutorial/create">Создать</Link>
      </div>
      <TutorialsListModule />
    </BasePage>
  );
};
