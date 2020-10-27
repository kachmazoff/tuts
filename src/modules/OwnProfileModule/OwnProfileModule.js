import React from "react";
import { connect } from "react-redux";
import { Container } from "../../components";
import { logout } from "../AuthModule/asyncActions";
import { getProfileData } from "./asyncActions";

const mapStateToProps = ({ ownProfile }) => ({
  data: ownProfile,
  username: ownProfile.username,
});

const mapDispatchToProps = {
  loadData: getProfileData,
  logout,
};

const OwnProfileComponent = ({ data, username, loadData, logout }) => {
  return (
    <Container>
      OwnProfile
      <p>{`Пользователь: ${username}`}</p>
      <p>{JSON.stringify(data)}</p>
      <button onClick={loadData}>Загрузить данные</button>
      <button
        onClick={() => {
          logout();
          document.location.href = "/";
        }}
      >
        Выйти
      </button>
    </Container>
  );
};

export const OwnProfileModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(OwnProfileComponent);
