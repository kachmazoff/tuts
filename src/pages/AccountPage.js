import React from "react";
import { BasePage } from "../components";
import { LoginModule } from "../modules/AuthModule/LoginModule";

export const AccountPage = () => (
  <BasePage title="Профиль">
    <LoginModule />
  </BasePage>
);
