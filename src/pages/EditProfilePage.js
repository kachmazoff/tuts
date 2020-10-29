import React from "react";
import { BasePage, ProfileForm } from "../components";
import { authorizedOnlyHOC } from "../modules/AuthModule";

export const EditProfilePageBase = () => {
  return (
    <BasePage title="Редактирование профиля">
      <ProfileForm onSubmit={console.log} />
    </BasePage>
  );
};

export const EditProfilePage = authorizedOnlyHOC(EditProfilePageBase);
