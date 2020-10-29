import React from "react";
import { BasePage } from "../components";
import { authorizedOnlyHOC } from "../modules/AuthModule";
import { EditProfileModule } from "../modules/OwnProfileModule";

export const EditProfilePageBase = () => {
  return (
    <BasePage title="Редактирование профиля">
      <EditProfileModule />
    </BasePage>
  );
};

export const EditProfilePage = authorizedOnlyHOC(EditProfilePageBase);
