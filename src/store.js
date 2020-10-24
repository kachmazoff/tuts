import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { tutorialsListSlice } from "./modules/TutorialsListModule";
import { createTutorialSlice } from "./modules/CreateTutorialModule";
import { tutorialSlice } from "./modules/TutorialModule";
import { authSlice } from "./modules/AuthModule";
import { ownProfileSlice } from "./modules/OwnProfileModule";

const reducer = combineReducers({
  [tutorialsListSlice.name]: tutorialsListSlice.reducer,
  [createTutorialSlice.name]: createTutorialSlice.reducer,
  [tutorialSlice.name]: tutorialSlice.reducer,
  [authSlice.name]: authSlice.reducer,
  [ownProfileSlice.name]: ownProfileSlice.reducer,
});

export const store = configureStore({
  reducer,
  middleware: [thunk],
});
