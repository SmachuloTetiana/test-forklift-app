import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { ContextState } from "context/contextState";

import Navbar from "components/Navbar";
import { Home } from "components/Home";
import { AboutUs } from "components/AboutUs";
import { Account } from "components/Account";

import { CreateCustomer } from "containers/CreateCustomer/CreateCustomer";
import Products from "containers/Products";
import UserAccount from "containers/Profile";
import { ProductDetail } from "containers/Products/ProductDetail";

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
            <Route path={"/create"} component={CreateCustomer} />
            <Route path={"/my-account"} component={UserAccount} />
            <Route path={"/products"} component={Products} />
            <Route path={"/product/:productModel"} component={ProductDetail} />
          </Switch>
        </ContextState>
      </div>
    </BrowserRouter>
  );
}

export default App;
