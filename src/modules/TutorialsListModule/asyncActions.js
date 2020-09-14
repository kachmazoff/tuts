import axios from "axios";
import { actions } from "./reducer";
import { API_TUTS_LIST } from "../../utils/api";

export const getTutsList = () => (dispatch) => {
  const { onLoadStart, onLoadComplete, onLoadFail } = actions;

  dispatch(onLoadStart());
  return axios
    .get(API_TUTS_LIST)
    .then((response) => {
      dispatch(onLoadComplete(response.data.results));
    })
    .catch(() => {
      dispatch(onLoadFail());
    });
};
