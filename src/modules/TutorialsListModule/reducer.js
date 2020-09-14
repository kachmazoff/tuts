import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  tuts: [],
  isLoading: false,
  errorMessage: "",
};

export const tutorialsListSlice = createSlice({
  name: "tutorialsList",
  initialState,
  reducers: {
    onLoadStart: (state) => ({
      ...state,
      isLoading: true,
      errorMessage: "",
    }),
    onLoadComplete: (state, { payload }) => ({
      ...state,
      isLoading: false,
      tuts: payload,
    }),
    onLoadFail: (state) => ({
      ...state,
      isLoading: false,
      errorMessage: "Во время получения данных произошла ошибка.",
    }),
  },
});

export const { reducer, actions } = tutorialsListSlice;
