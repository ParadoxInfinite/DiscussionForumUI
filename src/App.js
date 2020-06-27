import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Index from "./pages/Index/Index";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Index} />
      <Route exact path="/home" component={Home} />
    </Router>
  );
}

export default App;
