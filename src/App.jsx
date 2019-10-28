import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Results from "./Results/Results";
import RecipePage from "./RecipePage/RecipePage";

const App = () => {
  return (
    <section className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/results" component={Results} />
          <Route
            exact
            path="/recipe/:id"
            render={({ match }) => <RecipePage id={Number(match.params.id)} />}
          />
        </Switch>
      </Router>
    </section>
  );
};

export default App;
