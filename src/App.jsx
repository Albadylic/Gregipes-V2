import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Results from "./Results/Results";
import Recipe from "./Recipe/Recipe";

const App = () => {
  return (
    <section className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/recipe" component={Recipe} />
        </Switch>
      </Router>
    </section>
  );
};

export default App;
