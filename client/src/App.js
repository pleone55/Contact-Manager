import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layouts/Alerts';
import PrivateRoute from './components/routing/PrivateRoute';

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';
import './App.css';

//load token into global headers. Private route
if(localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <BrowserRouter>
            <>
              <Navbar title="Contact Manager" icon="fas fa-id-card-alt"/>
              <div className="container">
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </>
          </BrowserRouter>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
