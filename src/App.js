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
  EditProfilePage,
  TutorialPage,
} from "./pages";
import "./App.css";
import { MenuModule } from "./modules/MenuModule/MenuModule";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MenuModule />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/account" exact component={AccountPage} />
          <Route path="/account/edit" component={EditProfilePage} />
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
