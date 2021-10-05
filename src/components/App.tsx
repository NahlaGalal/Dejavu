import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from '../containers/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />

        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
