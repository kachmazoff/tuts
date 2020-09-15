import axios from "axios";
import { actions } from "./reducer";
import { API_TUTS_LIST } from "../../utils/api";

export const createTutorial = () => (dispatch, getState) => {
  const { onComplete, onFail, setIsLoading } = actions;
  const { createTutorial } = getState();
  const body = {
    title: createTutorial.title,
    description: createTutorial.description,
  };

  dispatch(setIsLoading(true));
  return axios
    .post(API_TUTS_LIST, body)
    .then((response) => {
      dispatch(setIsLoading(false));
      dispatch(onComplete());
    })
    .catch(() => {
      dispatch(setIsLoading(false));
      dispatch(onFail());
    });
};
