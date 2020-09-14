import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { store } from './store';
import { HomePage } from './pages/HomePage';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="*">
            404 page
        </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
