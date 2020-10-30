import React from "react";
import { connect } from "react-redux";
import { Container, ProfileHeader } from "../../components";
import { logout } from "../AuthModule/asyncActions";
import { getProfileData } from "./asyncActions";

const mapStateToProps = ({ ownProfile }) => ({
  userData: ownProfile.data,
});

const mapDispatchToProps = {
  loadData: getProfileData,
  logout,
};

const OwnProfileComponent = ({ userData, loadData, logout }) => {
  React.useEffect(() => {
    if (!userData) {
      loadData();
    }
  }, []);
  return (
    <Container>
      {userData && <ProfileHeader userData={userData} />}
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
