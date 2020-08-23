import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import HeroListPage from "./pages/HeroListPage";
const App = () => {
  return (
    <Router>
      <Route exact path="/">
        <Redirect to="/heroes" />
      </Route>
      <Switch>
        <Route path="/heroes/:profileId" component={HeroListPage} />
        <Route path="/heroes" component={HeroListPage} />
      </Switch>
    </Router>
  );
};

export default App;
