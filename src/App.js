import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import How from './components/How';
import Login from './components/Login';
import Signup from './components/Signup';
import Properties from './components/Properties';
import PropertiesRegistered from './components/PropertiesRegistered';
import Departments from './components/Departments';
import DepartmentsRegistered from './components/DepartmentsRegistered';
import Manager from './components/Manager';
import Footer from './components/Footer';
import Money from './components/Money';
import Balance from './components/Balance';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from "./components/PrivateComponent";
import { Components} from 'react-bulma-components/full';
import Navbar from './components/Navbar';

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
        <Route path= "/login" component={Login}/>
        <PrivateRoute path= "/manager" exact component={Manager}/>
        <PrivateRoute path= "/properties" exact component={Properties}/>
        <PrivateRoute path= "/properties-registered" exact component={PropertiesRegistered}/>
        <PrivateRoute path= "/departments-registered/:propertyId" exact component={DepartmentsRegistered}/>
        <PrivateRoute path= "/departments/:propertyId" exact component={Departments}/>
        <PrivateRoute path= "/:propertyId/:departmentId/money" exact component={Money}/>
        <PrivateRoute path= "/:propertyId/balance" exact component={Balance}/>
        </Switch>
        <Footer />
      </React.Fragment>

    );
  }
}

export default App;
