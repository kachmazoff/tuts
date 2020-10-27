import React from "react";
import { AccessChecker } from "../modules/AuthModule/AccessChecker";
import { LoginModule } from "../modules/AuthModule/LoginModule";

export const SigninPage = () => (
  <AccessChecker onlyUnauthorized redirectPath="/">
    <LoginModule />
  </AccessChecker>
);
