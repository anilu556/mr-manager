import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import How from './components/How';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Properties from './components/Properties';
import PropertiesRegistered from './components/PropertiesRegistered';
import Departments from './components/Departments';
import Tenants from './components/Tenants';
import Profile from './components/Profile';
import Footer from './components/Footer';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from "./components/PrivateComponent";
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
        <PrivateRoute path= "/profile" exact component={Profile}/>
        <PrivateRoute path= "/properties" exact component={Properties}/>
        <PrivateRoute path= "/properties-registered" exact component={PropertiesRegistered}/>
        <PrivateRoute path= "/departments" exact component={Departments}/>
        <PrivateRoute path= "/tenants" exact component={Tenants}/>
        </Switch>
        <Footer />
      </React.Fragment>

    );
  }
}

export default App;
