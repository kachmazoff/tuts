import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { tutorialsListSlice } from "./modules/TutorialsListModule";
import { createTutorialSlice } from "./modules/CreateTutorialModule";
import { tutorialSlice } from "./modules/TutorialModule";
import { authSlice } from "./modules/AuthModule";

const reducer = combineReducers({
  tutorialsList: tutorialsListSlice.reducer,
  createTutorial: createTutorialSlice.reducer,
  tutorial: tutorialSlice.reducer,
  auth: authSlice.reducer,
});

export const store = configureStore({
  reducer,
  middleware: [thunk],
});
