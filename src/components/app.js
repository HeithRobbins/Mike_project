import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./home";
import Projects from "./projects";
import Contact from "./contact";

import "../style/main.scss";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/Projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}
