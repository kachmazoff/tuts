import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum CheckState {
  initiated,
  succeed,
  failed,
}

export const MIN_USERNAME_LENGTH = 3;

export type AuthState = {
  username?: string;
  status: CheckState;
};

export const initialState: AuthState = {
  username: undefined,
  status: CheckState.initiated,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<string>) => ({
      ...state,
      status: CheckState.succeed,
      username: payload,
    }),
    logout: (state) => ({
      ...state,
      status: CheckState.failed,
      username: undefined,
    }),
    setStatus: (state, { payload }: PayloadAction<CheckState>) => ({
      ...state,
      status: payload,
    }),
  },
});

export const { reducer, actions } = authSlice;
