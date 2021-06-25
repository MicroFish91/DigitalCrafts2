import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import BaseLayout from './Components/Layouts/BaseLayout';
import Parent from './Components/Parent';
import ProjectManagement from './Components/ProjectManagement';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route path='/parent' component={Parent}/>
          <Route path='/pm' component={ProjectManagement}/>
        </Switch>
      </BaseLayout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);