import axios from "axios";
import { actions } from "./reducer";
import { API_TUTS_LIST } from "../../utils/api";

export const getTututorial = (tutorialId) => (dispatch) => {
  const { onLoadStart, onLoadComplete, onLoadFail, setTutorial } = actions;
  console.log("tutorialId getTut", tutorialId);
  dispatch(onLoadStart());
  return axios
    .get(`${API_TUTS_LIST}/${tutorialId}`)
    .then((response) => {
      dispatch(setTutorial(response.data));
      dispatch(getSteps(tutorialId));
    })
    .catch(() => {
      dispatch(onLoadFail());
    });
};

const getSteps = (tutorialId) => (dispatch) => {
  const { onLoadStart, onLoadComplete, onLoadFail, setSteps } = actions;

  dispatch(onLoadStart());
  return axios
    .get(`${API_TUTS_LIST}/${tutorialId}/steps`)
    .then((response) => {
      dispatch(setSteps(response.data));
      dispatch(onLoadComplete(response.data));
    })
    .catch(() => {
      dispatch(onLoadFail());
    });
};
