import React, { ReactNode, FC } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { AuthState, CheckState } from "./reducer";
import { useAuthModule } from "./useAuthModule";

const mapStateToProps = ({ auth }: { auth: AuthState }) => ({
  status: auth.status,
});

export interface Props extends ReturnType<typeof mapStateToProps> {
  children: ReactNode;
  onlyUnauthorized?: boolean;
  redirectPath?: string;
}

export const AccessCheckerComponent: FC<Props> = ({
  children,
  status,
  onlyUnauthorized,
  redirectPath = "/signin",
}) => {
  useAuthModule();

  if (status === CheckState.initiated) {
    return <div>Check user session...</div>;
  }

  if (
    (status === CheckState.failed && !onlyUnauthorized) ||
    (status === CheckState.succeed && onlyUnauthorized)
  ) {
    return <Redirect to={redirectPath} />;
  }

  return <>{children}</>;
};

export const AccessChecker = connect(mapStateToProps)(AccessCheckerComponent);
