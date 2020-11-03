import React from "react";
import { BasePage } from "../components";
import { TutorialsListModule } from "../modules";
import { OwnProfileModule } from "../modules/OwnProfileModule";

export const AccountPage = () => (
  <BasePage title="Профиль">
    <OwnProfileModule />
    <TutorialsListModule title="Мои тутсы" />
  </BasePage>
);
