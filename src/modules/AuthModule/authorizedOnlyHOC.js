import React from "react";
import { AccessChecker } from "./AccessChecker";

export const authorizedOnlyHOC = (
  Component,
  redirect = "/signin",
  onlyUnauthorized
) => {
  const AuthorizedOnly = (props) => {
    return (
      <AccessChecker
        redirectPath={redirect}
        onlyUnauthorized={onlyUnauthorized}
      >
        <Component {...props} />
      </AccessChecker>
    );
  };

  AuthorizedOnly.displayName = `AuthorizedOnly(${getDisplayName(Component)})`;

  return AuthorizedOnly;
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}
