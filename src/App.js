import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

import { ContextState } from "context/contextState";

import Navbar from "components/Navbar";
import { Home } from "components/Home";
import { AboutUs } from "components/AboutUs";
import { Account } from "components/Account";

import { CreateCustomer } from "containers/CreateCustomer/CreateCustomer";
import { List } from "containers/List/List";
import UserAccount from "containers/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid px-0">
        <ContextState>
          <Navbar />
          <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/about-us"} component={AboutUs} />
            <Route path={"/account"} component={Account} />
            <Route path={"/my-account"} component={UserAccount} />
            <Route path={"/create"} component={CreateCustomer} />
            <Route path={"/list"} component={List} />
          </Switch>
        </ContextState>
      </div>
    </BrowserRouter>
  );
}

export default App;
