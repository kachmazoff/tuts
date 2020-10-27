import { useDispatch, useSelector } from "react-redux";
import { tryLoadUserSession } from "./asyncActions";
import { authSlice, AuthState, CheckState } from "./reducer";

const authDataSelector = (store: { [authSlice.name]: AuthState }): AuthState =>
  store[authSlice.name];

export const useAuthStatus = (): CheckState => {
  const dispatch = useDispatch();
  const authState: AuthState = useSelector(authDataSelector);

  if (authState.status == CheckState.initiated) {
    dispatch(tryLoadUserSession());
  }

  return authState.status;
};
