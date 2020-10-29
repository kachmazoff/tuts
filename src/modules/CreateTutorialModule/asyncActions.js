import { axios } from "../../utils/customAxios";
import { API_TUTS_LIST } from "../../config/apiEndpoints";
import { actions } from "./reducer";

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
