import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
} from "react-router-dom";
import HeroListPage from "./pages/HeroListPage";
import HeroProfilePage from "./pages/HeroProfilePage";

const App = () => {
  return (
    <Router>
        <Route exact path="/">
          <Redirect to="/heroes" />
        </Route>
        <Route path="/heroes" component={HeroListPage} />
          <Route path="/heroes/:profileId" component={HeroProfilePage}>
        </Route>
    </Router>
  );
};

export default App;
