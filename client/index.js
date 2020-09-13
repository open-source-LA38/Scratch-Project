import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import Login from '../client/components/login/Login.jsx'
import Signup from '../client/components/login/Signup.jsx'
<<<<<<< HEAD
import {BrowserRouter as Router, Ro0ute, Switch} from 'react-router-dom';
=======
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
>>>>>>> 1a3183ffd2bc3ec0b57b375b60150569cffb71f7



import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store';

// uncomment so that webpack can bundle styles
// import styles from './scss/application.scss';

<<<<<<< HEAD
//https://redux.js.org/advanced/usage-with-react-router

render(
//   (
// <Router>
//   <Switch>
//     <Route path = "/login" component = {Login}/>
//     <Route path = "/signup" component = {Signup}/>
//   </Switch>
// </Router>
// )
<Provider store={store}>
  <App />
</Provider>,
document.getElementById('root'))
=======
render((
  <Router>
    <Switch>
      <Route path="/auth/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Switch>
  </Router>
)
  , document.getElementById('root'))
>>>>>>> 1a3183ffd2bc3ec0b57b375b60150569cffb71f7
