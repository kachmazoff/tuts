import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { tutorialsListSlice } from "./modules/TutorialsListModule";
import { createTutorialSlice } from "./modules/CreateTutorialModule";

const reducer = combineReducers({
  tutorialsList: tutorialsListSlice.reducer,
  createTutorial: createTutorialSlice.reducer,
});

export const store = configureStore({
  reducer,
  middleware: [thunk],
});
