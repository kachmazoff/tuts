import React from "react";
import { BasePage, Container, UserCard } from "../components";
import { LoginModule } from "../modules/AuthModule/LoginModule";
import { OwnProfileModule } from "../modules/OwnProfileModule";

export const AccountPage = () => (
  <BasePage title="Профиль">
    <Container>
      Информация о пользователе:
      <p>JWT: {localStorage.getItem("token")}</p>
      <UserCard username="root" />
      <OwnProfileModule />
    </Container>
    {/* <LoginModule /> */}
  </BasePage>
);
