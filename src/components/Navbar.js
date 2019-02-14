import React, { Component } from 'react';
import logo from '../images/logolar.png';
import {Link, withRouter} from 'react-router-dom';

class Navbar extends Component {

  handleLogout = () => {

    localStorage.removeItem("token");
    this.props.history.push("/");
  }

  render() {
    return (
      <nav class="navbar "  role="navigation" aria-label="main navigation">
        <React.Fragment>
        <div class="navbar-brand">
          <Link to="/">
          <img class="navbar-img" src={logo} alt="logo"/>
          </Link>
          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
            <Link className="navbar-item" to="/">Home</Link>
            <Link className="navbar-item" to="/about">Acerca de</Link>
            <Link className="navbar-item" to="/how">¿Cómo funciona?</Link>
            <Link className="navbar-item" to="/signup">¡Comienza ya!</Link>
            <Link className="navbar-item" to="/contact">Contacto</Link>

          <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
              Manager
              </a>
            <div class="navbar-dropdown">
                <a  onClick={ this.handleLogout } class="navbar-item drop">
                Log out
                </a>
            </div>
          </div>
        </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
              <Link className="button is-primary" to="/login"><strong> Log In</strong></Link>
              </div>
            </div>
          </div>
        </div>
        </React.Fragment>
      </nav>
    );
  }
}

export default withRouter(Navbar);
