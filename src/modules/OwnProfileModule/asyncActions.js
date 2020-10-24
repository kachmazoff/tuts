import { axios } from "../../utils/customAxios";
import { API_GET_OWN_PROFILE_DATA } from "../../config/apiEndpoints";
import { actions } from "./reducer";

export const getProfileData = () => (dispatch, getState) => {
  const { saveData, setUsername, onLoadSuccess, onLoadStart } = actions;

  dispatch(onLoadStart());

  axios
    .get(API_GET_OWN_PROFILE_DATA)
    .then((response) => {
      const data = response.data;

      console.log("userdata", data);
      dispatch(saveData(data));
      dispatch(setUsername(data.username));
      dispatch(onLoadSuccess());
    })
    .catch(() => {
      //   TODO: error handling
    });
};
