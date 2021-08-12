import './App.css';
import {BrowserRouter as Router, Route, link, NavLink, Switch } from 'react-router-dom';
import Home from '../src/component/Home'
import React, { Component } from 'react'
import Engineering from '../src/component/Engineering'
import Archi from '../src/component/Archi'
import Medical from '../src/component/Medical'
import Dental from '../src/component/Dental'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path ="/Engineering" component={Engineering} />
        <Route path ="/Archi" component={Archi} />
        <Route path ="/Medical" component={Medical} />
        <Route path ="/Dental" component={Dental} />
      </div>
      </Router>
    )
  }
}


export default App;
