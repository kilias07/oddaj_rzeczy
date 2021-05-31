import LayoutDefault from "./layouts/LayoutDefault";
import Home from "./views/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OddajRzeczy from "./views/OddajRzeczy";
import Signin from "./views/SignIn";
import Signup from "./views/SignUp";
import Logout from "./views/Logout";

function App() {
  return (
    <Router>
      <LayoutDefault>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/oddaj-rzeczy" exact component={OddajRzeczy} />
          <Route path="/logowanie" exact component={Signin} />
          <Route path="/rejestracja" exact component={Signup} />
          <Route path="/wylogowano" exact component={Logout} />
        </Switch>
      </LayoutDefault>
    </Router>
  );
}

export default App;
