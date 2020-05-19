import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
