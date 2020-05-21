import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ConfirmAccount from "./pages/ConfirmAccount";
import Feed from "./pages/Feed";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact></Route>
        <Route path="/signUp" component={SignUp} exact></Route>
        <Route path="/confirmAccount" component={ConfirmAccount} exact></Route>
        <Route path="/feed" exact component={Feed}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
