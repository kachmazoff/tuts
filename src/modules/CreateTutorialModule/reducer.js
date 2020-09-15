import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  description: "",
  creationStep: 0,
  isLoading: false,
};

export const TOTAL_FORM_STEPS = 1;

export const createTutorialSlice = createSlice({
  name: "createTutorial",
  initialState,
  reducers: {
    setTitle: (state, { payload }) => ({
      ...state,
      title: payload,
    }),
    setDescription: (state, { payload }) => ({
      ...state,
      description: payload,
    }),
    setCreationStep: (state, { payload }) => ({
      ...state,
      creationStep: payload,
    }),
    incrementStep: (state) => ({
      ...state,
      creationStep: state.creationStep + 1,
    }),
    onStart: () => ({
      ...initialState,
    }),
    onComplete: () => ({
      ...initialState,
      creationStep: -1,
    }),
    onFail: () => ({
      ...initialState,
      creationStep: -2,
    }),
    setIsLoading: (state, { payload }) => ({
      ...state,
      isLoading: payload,
    }),
  },
});

export const { reducer, actions } = createTutorialSlice;
