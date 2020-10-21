import React from "react";
import { Link } from "react-router-dom";
import { BasePage, LinkButton } from "../components";
import { TutorialsListModule } from "../modules";

export const HomePage = () => {
  return (
    <BasePage title="Главная">
      <div>
        <LinkButton to="/tutorial/create">Создать</LinkButton>
      </div>
      <TutorialsListModule />
    </BasePage>
  );
};
