import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import Index from "./pages/Index/Index";
import Home from "./pages/Home/Home";
import NotFound from "./pages/404/NotFound";
import history from "./utils/history";

import { AuthProvider } from "./context/auth";
import { AuthRoute } from "./utils/AuthRoute";

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Switch>
          <AuthRoute exact path="/" component={Index} />
          <Route exact path="/home" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
