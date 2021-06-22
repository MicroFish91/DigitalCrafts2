import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import BaseLayout from './layout/BaseLayout';
import Address from './exercises/address';
import Envelope from './exercises/envelope';
import CreditCard from './exercises/creditCard'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route path="/address" component={Address} />
          <Route path="/envelope" component={Envelope} />
          <Route path="/credit" component={CreditCard} />
        </Switch>
      </BaseLayout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


