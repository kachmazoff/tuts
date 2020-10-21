import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { store } from "./store";
import { HomePage, CreateTutorialPage, NotFoundPage } from "./pages";
import "./App.css";
import { TutorialPage } from "./pages/TutorialPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/tutorial/create" exact component={CreateTutorialPage} />
          <Route path="/tutorial/:id" component={TutorialPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
