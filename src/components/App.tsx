import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from '../containers/Login';
import Signup from '../containers/Signup';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />

        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
