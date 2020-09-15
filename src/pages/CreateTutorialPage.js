import React from "react";
import { Link } from "react-router-dom";
import { CreateTutorialModule } from "../modules";

export const CreateTutorialPage = () => {
  return (
    <div>
      <h1>Создание туториала</h1>
      <div>
        <Link to="/">На главную</Link>
      </div>
      <CreateTutorialModule />
    </div>
  );
};
