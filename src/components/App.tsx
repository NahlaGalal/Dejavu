import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Gangs from '../containers/Gangs';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Me from '../containers/Me';
import Signup from '../containers/Signup';
import User from '../containers/User';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Me} />
        <Route exact path="/user/:username" component={User} />
        <Route exact path="/gangs" component={Gangs} />

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
