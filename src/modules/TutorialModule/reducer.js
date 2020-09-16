import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  tutorial: {},
  steps: [],
  isLoading: false,
  errorMessage: "",
};

export const tutorialSlice = createSlice({
  name: "tutorial",
  initialState,
  reducers: {
    onLoadStart: (state) => ({
      ...state,
      isLoading: true,
      errorMessage: "",
    }),
    onLoadComplete: (state) => ({
      ...state,
      isLoading: false,
      errorMessage: "",
    }),
    onLoadFail: (state) => ({
      ...state,
      isLoading: false,
      errorMessage: "Во время получения данных произошла ошибка.",
    }),
    setTutorial: (state, { payload }) => ({
      ...state,
      tutorial: payload,
    }),
    setSteps: (state, { payload }) => ({
      ...state,
      steps: payload,
    }),
  },
});

export const { reducer, actions } = tutorialSlice;
