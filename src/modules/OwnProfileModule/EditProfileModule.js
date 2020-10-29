import React from "react";
import { connect } from "react-redux";
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
  React.useEffect(() => getProfileData(), []);

  return (
    <Container>
      <ProfileForm
        initialData={data}
        onSubmit={(newModel) => {
          updateProfile({ ...data, ...newModel });
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
