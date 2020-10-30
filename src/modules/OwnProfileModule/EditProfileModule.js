import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, ProfileForm } from "../../components";
import { updateProfile, getProfileData } from "./asyncActions";

const mapStateToProps = ({ ownProfile }) => ({
  data: ownProfile.data,
  isLoading: ownProfile.isLoading,
});

const mapDispatchToProps = {
  updateProfile,
  getProfileData,
};

const EditProfileComponent = ({
  data,
  updateProfile,
  getProfileData,
  isLoading,
}) => {
  let history = useHistory();
  React.useEffect(() => getProfileData(), []);

  return (
    <Container>
      <ProfileForm
        initialData={data}
        onSubmit={(newModel) => {
          updateProfile({ ...data, ...newModel });
        }}
        onCancel={() => {
          console.log("history.length", history.length);
          if (history.length > 2) {
            history.goBack();
          } else {
            document.location.href = "/";
          }
        }}
        disabled={isLoading}
      />
    </Container>
  );
};

export const EditProfileModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileComponent);
