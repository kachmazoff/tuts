import React from "react";
import { connect } from "react-redux";
import { LoginForm } from "../../components";
import { login } from "./asyncActions";

const mapStateToProps = ({ auth }) => ({
  username: auth.username,
});

const mapDispatchToProps = {
  login: login,
};

const LoginComponent = ({ login }) => {
  return (
    <div>
      <LoginForm
        onSubmit={(data) =>
          login(data.username, data.password).then(() => {
            document.location.href = "/";
          })
        }
      />
    </div>
  );
};

export const LoginModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
