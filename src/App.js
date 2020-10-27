import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { store } from "./store";
import {
  HomePage,
  CreateTutorialPage,
  NotFoundPage,
  AccountPage,
  SigninPage,
} from "./pages";
import "./App.css";
import { TutorialPage } from "./pages/TutorialPage";
import { MenuModule } from "./modules/MenuModule/MenuModule";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MenuModule />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/account" component={AccountPage} />
          <Route path="/signin" component={SigninPage} />
          <Route path="/tutorial/create" exact component={CreateTutorialPage} />
          <Route path="/tutorial/:id" component={TutorialPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
