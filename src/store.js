import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { tutorialsListSlice } from "./modules/TutorialsListModule";

const reducer = combineReducers({
  tutorialsList: tutorialsListSlice.reducer,
});

export const store = configureStore({
  reducer,
  middleware: [thunk],
});
