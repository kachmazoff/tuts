import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="*">
          404 page
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
