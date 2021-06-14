import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        {/* Home */}
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
