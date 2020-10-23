import { axios } from "../../utils/customAxios";
import { API_LOGIN } from "../../config/apiEndpoints";
import { actions } from "./reducer";
import { deleteToken, saveToken } from "./helpers";

export const login = (username, password) => (dispatch, getState) => {
  const { login: loginAction } = actions;

  const body = {
    username,
    password,
  };

  return axios
    .post(API_LOGIN, body)
    .then((response) => {
      const token = response.data.token;
      dispatch(loginAction(username));
      saveToken(token);
      axios.setAuthorizationHeader(token);
    })
    .catch(() => {
      //   dispatch(setIsLoading(false));
      //   dispatch(onFail());
    });
};

export const logout = () => (dispatch, getState) => {
  const { logout: logoutAction } = actions;

  deleteToken();
  axios.clearAuthorizationHeader();
  dispatch(logoutAction());
};
