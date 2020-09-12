import React from 'react';
import { render } from 'react-dom';
// import App from './App.jsx';
import Login from '../client/components/login/Login.jsx'
import Signup from '../client/components/login/Signup.jsx'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';




// uncomment so that webpack can bundle styles
// import styles from './scss/application.scss';

render((
<Router>
  <Switch>
    <Route path = "/login" component = {Login}/>
    <Route path = "/signup" component = {Signup}/>
  </Switch>
</Router>
)
,document.getElementById('root'))
