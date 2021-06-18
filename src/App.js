import LayoutDefault from "./layouts/LayoutDefault";
import Home from "./views/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OddajRzeczy from "./views/OddajRzeczy";
import Signin from "./views/SignIn";
import Signup from "./views/SignUp";
import Logout from "./views/Logout";

function App() {
  return (
    <>
    <Router>
      <LayoutDefault>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/oddaj-rzeczy" component={OddajRzeczy} />
          <Route path="/logowanie" component={Signin} />
          <Route path="/rejestracja" component={Signup} />
          <Route path="/wylogowano" component={Logout} />
        </Switch>
      </LayoutDefault>
    </Router>
    </>
  );
}

export default App;
