import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Content from './components/Content';
import About from './components/About';
import How from './components/How';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import {Route, Switch} from 'react-router-dom';
import { Components} from 'react-bulma-components/full';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
        <Route path= "/" exact component={Home} />
        <Route path= "/about" component={About}/>
        <Route path= "/how" component={How}/>
        <Route path= "/signup" component={Signup}/>
        <Route path= "/contact" component={Contact} />
        <Route path= "/login" component={Login}/>
        <Route path= "/dashboard" component={Dashboard}/>
        </Switch>
        <Footer />
      </React.Fragment>

    );
  }
}

export default App;
