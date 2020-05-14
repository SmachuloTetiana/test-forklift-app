import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { ContextState } from "context/contextState";

import { Navbar } from "components/Navbar";
import { Home } from "components/Home";
import { AboutUs } from "components/AboutUs";
import { Account } from "components/Account";

import { User } from "containers/Profile/User";
import CreateCustomer from "containers/CreateCustomer";

function App() {
  return (
    <ContextState>
      <BrowserRouter>
        <div className="container-fluid px-0">
          <Navbar />
          <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/about-us"} component={AboutUs} />
            <Route path={"/account"} component={Account} />
            <Route path={"/user"} component={User} />
            <Route path={"/create"} component={CreateCustomer} />
          </Switch>
        </div>
      </BrowserRouter>
    </ContextState>
  );
}

export default App;
