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
import CreatePost from "./pages/CreatePost/CreatePost";
import SinglePost from "./pages/SinglePost/SinglePost";

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Switch>
          <AuthRoute exact path="/" component={Index} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/createPost" component={CreatePost} />
          <Route exact path="/post/:postId" component={SinglePost} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
