import axios from "axios";
import { actions } from "./reducer";
import { API_TUTS_LIST } from "../../utils/api";

export const createTutorial = () => (dispatch, getState) => {
  const { onComplete, onFail, setIsLoading } = actions;
  const { createTutorial } = getState();
  const body = {
    title: createTutorial.title,
    description: createTutorial.description,
    // steps: createTutorial.steps,
  };

  dispatch(setIsLoading(true));
  return axios
    .post(API_TUTS_LIST, body)
    .then((response) => {
      dispatch(setIsLoading(false));
      dispatch(onComplete());
      console.log(response);
      axios
        .post(
          `${API_TUTS_LIST}/${response.data.id}/steps`,
          createTutorial.steps
        )
        .then(() => console.log("YES"));
    })
    .catch(() => {
      dispatch(setIsLoading(false));
      dispatch(onFail());
    });
};
