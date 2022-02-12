import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Gang from '../containers/Gang';
import Gangs from '../containers/Gangs';
import Home from '../containers/Home';
import Lane from "../containers/Lane";
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
        <Route exact path="/gang/:gangId" component={Gang} />
        <Route exact path="/memory-lane" component={Lane} />

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
