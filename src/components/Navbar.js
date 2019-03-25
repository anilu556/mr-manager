import React, { Component } from 'react';
import logo from '../images/logolar.png';
import {Link, withRouter} from 'react-router-dom';
import isLoggedIn from '../utils/isLoggedIn';

class Navbar extends Component {

  constructor(){
  super()
    this.state= {
    managers: [],
    local: '',
    manager: '',
    name:''
    }
  }


    componentDidMount (){
      fetch('https://evening-mesa-38422.herokuapp.com/api/v1/managers', {
        headers: {
          "Authorization" : `bearer ${localStorage.getItem("token")}`
        }
      })

      .then(response => response.json())
      .then(data => {
        console.log(data.managers)
        this.setState({
          managers: data.managers
        })

        const token = localStorage.getItem('token')
        let base64Url = token.split('.')[1]
        let base64 = base64Url.replace('-','+').replace('_','/')
        const t = JSON.parse(window.atob(base64))
        console.log(t.email)
        const currentUser = this.state.managers.filter(manager => {
          if(manager.email === t.email)
           {
              this.setState({
              manager : manager,
              name : manager.name
            })
          // console.log(manager)
          return manager
          }
        })
      })
    }

  handleLogout = () => {

    localStorage.removeItem("token");
    this.props.history.push("/");
  }

  hamburgerMenu = () => {
    document.querySelector('.navbar-burger').addEventListener("click", toggleNav);

    function toggleNav() {
            var nav = document.querySelector('.navbar-menu');
            if(nav.className == "navbar-menu") {
                nav.className = "navbar-menu is-active";
            } else {
                nav.className = "navbar-menu";
            }
    }
}

  render() {
    return (

      <nav class="navbar is-info"  role="navigation" aria-label="main navigation">
        <React.Fragment>
        <div class="container">     
        {!isLoggedIn() && (
          <div class="navbar-brand">
            <Link to="/">
            <img class="navbar-img" src={logo} alt="logo"/>
            </Link>
            <span onClick={this.hamburgerMenu} role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </span>
          </div>
          )}
        {isLoggedIn() && (
          <div class="navbar-brand">
            <Link to="/manager">
            <img class="navbar-img" src={logo} alt="logo"/>
            </Link>
            <span onClick={this.hamburgerMenu} role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </span>
          </div>
        )}

        <div id="navMenu" class="navbar-menu">
          <div class="navbar-start">
          {!isLoggedIn() && (
              <Link className="navbar-item" to="/">Home</Link>
            )}
          {isLoggedIn() && (
              <Link className="navbar-item" to="/manager">Home</Link>
          )}
              <Link className="navbar-item" to="/about">Acerca de</Link>
              <Link className="navbar-item" to="/how">¿Cómo funciona?</Link>
              <Link className="navbar-item" to="/signup">¡Comienza ya!</Link>

            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                Manager
                </a>
              <div class="navbar-dropdown">
                  <Link className="navbar-item drop" to="/properties-registered">Propiedades</Link>
                  <a  onClick={ this.handleLogout } class="navbar-item drop">
                  Log out
                  </a>
              </div>
            </div>
          </div>
            <div class="navbar-end">
              <div class="navbar-item">
              {!isLoggedIn() && (
                <div class="buttons">
                <Link className="button is-primary" to="/login"><strong> Log In</strong></Link>
                </div>
              )}
              {isLoggedIn() && (
              <div>
                <div className='nav-logged' >
                    <p>¡Hola!</p>
                </div>
              </div>
            )}
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
