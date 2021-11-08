import React from "react";
import "./App.css";
import Login from "./components/route/Login.jsx";
import Register from "./components/route/Register.jsx";
import Home from "./components/route/Home.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserContext from "./context/UserContext";

function App() {
  const setToken = (userToken) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
  };
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const deleteToken = () => {
    sessionStorage.setItem("token", null);
  };

  return (
    <UserContext.Provider value={{ setToken, getToken, deleteToken }}>
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
