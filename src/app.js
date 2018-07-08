import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink exact to="/about">About</NavLink></li>
        <li><NavLink exact to="/contact">Contact</NavLink></li>
      </ul>
      <div>
        <Route exact path="/" render={ () => <h2>Home</h2> }/>
        <Route path="/about" render={ () => <h2>About</h2> }/>
        <Route path="/contact" render={ () => <h2>Contact</h2> }/>
      </div>
    </div>
  </Router>,
  document.getElementById('root')
);
