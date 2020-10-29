import { axios } from "../../utils/customAxios";
import {
  API_GET_OWN_PROFILE_DATA,
  API_PROFILE,
} from "../../config/apiEndpoints";
import { actions } from "./reducer";

export const getProfileData = () => (dispatch, getState) => {
  const { saveData, setUsername, onLoadSuccess, onLoadStart } = actions;

  dispatch(onLoadStart());

  axios
    .get(API_GET_OWN_PROFILE_DATA)
    .then((response) => {
      const data = response.data;

      dispatch(saveData(data));
      dispatch(setUsername(data.username));
      dispatch(onLoadSuccess());
    })
    .catch(() => {
      //   TODO: error handling
    });
};

export const updateProfile = (updatedModel) => (dispatch, getState) => {
  const { onLoadSuccess, onLoadStart } = actions;

  dispatch(onLoadStart(true));
  return axios
    .post(API_PROFILE, updatedModel)
    .then(() => {
      dispatch(onLoadSuccess());
    })
    .catch(() => {
      // dispatch(setIsLoading(false));
      // dispatch(onFail());
    });
};
