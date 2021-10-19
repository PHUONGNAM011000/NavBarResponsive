import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/index";
import About from "./components/pages/about";
import Services from "./components/pages/services";
import Contact from "./components/pages/contact";
import SignUp from "./components/pages/signup";

const App = () => {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact-us" component={Contact} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </Router>
  );
};

export default App;
