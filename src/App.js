import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import SignUp from "./components/sign-up/SignUp";
import SignIn from "./components/sign-in/SignIn";
import CheckOut from "./components/checkout/CheckOut";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/checkout" component={CheckOut} />
      </Switch>
    </div>
  );
}

export default App;
