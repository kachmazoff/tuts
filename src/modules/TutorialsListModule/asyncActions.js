import { axios } from "../../utils/customAxios";
import { API_TUTS_LIST } from "../../config/apiEndpoints";
import { actions } from "./reducer";

export const getTutsList = () => (dispatch) => {
  const { onLoadStart, onLoadComplete, onLoadFail } = actions;

  dispatch(onLoadStart());
  return axios
    .get(API_TUTS_LIST)
    .then((response) => {
      dispatch(onLoadComplete(response.data));
    })
    .catch(() => {
      dispatch(onLoadFail());
    });
};

export const deleteTutorial = (tutorialId) => (dispatch) => {
  const { onLoadStart, onLoadComplete, onLoadFail } = actions;

  // dispatch(onLoadStart());
  return axios
    .delete(API_TUTS_LIST + `/${tutorialId}`)
    .then((response) => {
      dispatch(getTutsList());
    })
    .catch(() => {
      // dispatch(onLoadFail());
    });
};
