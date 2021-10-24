import React from "react";
import "./App.css";
import Login from "./components/route/Login.jsx";
import Register from "./components/route/Register.jsx";
import Home from "./components/route/Home.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
