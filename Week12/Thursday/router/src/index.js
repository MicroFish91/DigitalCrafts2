  
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import App from './App';
import AboutUs from './Components/AboutUs';
import FAQ from './Components/FAQ';
import Forms from './Components/Forms';
import BaseLayout from './Components/Layouts/BaseLayout';
import Plots from './Components/Plots';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route path='/about' component={AboutUs}/>
          <Route path='/faq/:faqID' component={FAQ}/>
          <Route path='/forms' component={Forms}/>
          <Route path='/plots' component={Plots}/>
        </Switch>
      </BaseLayout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
