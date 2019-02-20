import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import How from './components/How';
import Login from './components/Login';
import Signup from './components/Signup';
import Properties from './components/Properties';
import PropertiesRegistered from './components/PropertiesRegistered';
import Departments from './components/Departments';
import DepartmentsRegistered from './components/DepartmentsRegistered';
import Tenants from './components/Tenants';
import Profile from './components/Profile';
import Manager from './components/Manager';
import Footer from './components/Footer';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from "./components/PrivateComponent";
import { Components} from 'react-bulma-components/full';

class App extends Component {
  constructor(){
    super();
    this.state={
      propertyId: ''
    }
  }

  onChangeValue= (newvalue) =>{
    this.setState({
      propertyId: newvalue
    })
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
        <Route path= "/" exact component={Home} />
        <Route path= "/about" component={About}/>
        <Route path= "/how" component={How}/>
        <Route path= "/signup" component={Signup}/>
        <Route path= "/contact" component={Contact} />
        <Route path= "/login" component={Login}/>
        <PrivateRoute path= "/manager" exact component={Manager}/>
        <PrivateRoute path= "/profile" exact component={Profile}/>
        <PrivateRoute path= "/properties" exact component={Properties}/>
        <PrivateRoute path= "/properties-registered" exact component={PropertiesRegistered}/>
        <Route path= "/departments-registered/:propertyId" exact component={DepartmentsRegistered}/>
        <PrivateRoute path= "/departments/:propertyId" exact component={Departments}/>
        <PrivateRoute path= "/tenants" exact component={Tenants}/>
        </Switch>
        <Footer />
      </React.Fragment>

    );
  }
}

export default App;
