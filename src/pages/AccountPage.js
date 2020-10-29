import React from "react";
import { BasePage, Container, ProfileHeader, UserCard } from "../components";
import { OwnProfileModule } from "../modules/OwnProfileModule";

export const AccountPage = () => (
  <BasePage title="Профиль">
    <ProfileHeader />
    <Container>
      Информация о пользователе:
      <p>JWT: {localStorage.getItem("token")}</p>
      <UserCard username="root" />
      <OwnProfileModule />
    </Container>
    {/* <LoginModule /> */}
  </BasePage>
);
