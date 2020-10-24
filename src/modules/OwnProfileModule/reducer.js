import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  data: undefined,
  username: "",
  isLoading: false,
  //   errorMessages: {},
};

export const ownProfileSlice = createSlice({
  name: "ownProfile",
  initialState,
  reducers: {
    saveData: (state, { payload }) => ({
      ...state,
      data: payload,
    }),
    onLoadStart: (state) => ({
      ...state,
      isLoading: true,
    }),
    onLoadSuccess: (state) => ({
      ...state,
      isLoading: false,
    }),
    // onLoadFail: (state, { payload }) => ({
    //   ...state,
    //   isLoading: false,
    //   errorMessage: payload,
    // }),
    setUsername: (state, { payload }) => ({
      ...state,
      username: payload,
    }),
  },
});

export const { reducer, actions } = ownProfileSlice;
