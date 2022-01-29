import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Profile from "./pages/Profile/Profile";
import PrivateRoute from "./auth.js/PrivateRoute";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signup' exact component={SignUp} />
        <Route path='/signin' exact component={SignIn} />
        <PrivateRoute path='/user/profile' exact component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
