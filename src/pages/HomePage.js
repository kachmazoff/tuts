import React from "react";
import { Link } from "react-router-dom";
import { TutorialsListModule } from "../modules";
import { CreateTutorialModule } from "../modules/CreateTutorialModule/CreateTutorialModule";

export const HomePage = () => {
  return (
    <div>
      <h1>Home page</h1>
      <div>
        <Link to="/tutorial/create">Создать</Link>
      </div>
      <TutorialsListModule />
    </div>
  );
};
