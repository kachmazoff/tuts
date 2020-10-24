import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  username: undefined,
  status: "initiated",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => ({
      ...state,
      status: "succeed",
      username: payload,
    }),
    logout: (state) => ({
      ...state,
      status: "failed",
      username: undefined,
    }),
  },
});

export const { reducer, actions } = authSlice;
