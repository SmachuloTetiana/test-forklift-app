import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { AboutUs } from './components/AboutUs';
import { Account } from './components/Account';
import Users from './containers/AllUsers/Users';
import { ContextState } from './context/contextState';

function App() {
  return (
    <ContextState>
      <BrowserRouter>
        <div className="container-fluid px-0">
          <Navbar />
          <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/about-us'} component={AboutUs} />
            <Route path={'/account'} component={Account} />
            <Route path={'/users'} component={Users} />
          </Switch>
        </div>
      </BrowserRouter>
    </ContextState>
  );
}

export default App;
