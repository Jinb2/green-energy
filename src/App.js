import React from "react";
import Home from "./components/Home";
import Help from "./components/Help";
import Green from "./components/Green";
import News from "./components/News";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/news">
          <News />
        </Route>
        <Route exact path="/help">
          <Help />
        </Route>
        <Route exact path="/green">
          <Green />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
