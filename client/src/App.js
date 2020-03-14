import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';

import ContactState from './context/contact/ContactState';
import './App.css';

function App() {
  return (
    <ContactState>
      <BrowserRouter>
        <>
          <Navbar title="Contact Manager" icon="fas fa-id-card-alt"/>
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </div>
        </>
      </BrowserRouter>
    </ContactState>
  );
}

export default App;
