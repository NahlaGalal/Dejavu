import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from '../containers/Home';
import Login from '../containers/Login';
import Signup from '../containers/Signup';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/" component={Home} />

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
