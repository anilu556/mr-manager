import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import Navbar from './Navbar';

class Login extends Component {
  state = {
    error: {
      status: false,
      message: ""
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    const API_URL = "https://evening-mesa-38422.herokuapp.com/api/v1"

    fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value
      })
    })
    .then(response => response.json())
    .then(data => {
      if(typeof data.token !== "undefined"){
        localStorage.setItem("token", data.token);
        this.props.history.push("/manager");
      } else {
        this.setState({
          error: {
            status: true,
            message:data.message
          }
        })
      }
    })
    .catch(e => alert (e));
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
      <div className="section-login">
        <form className="login-form" onSubmit={ this.onSubmit} >
        <p> Inicia Sesión </p>
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input name="email" class="input" type="email" placeholder="Email" />
              <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input  name="password" class="input" type="password" placeholder="Contraseña" />
              <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div class="field is-grouped is-grouped-right">
            <p class="control">
              {this.state.error.status && <p> {this.state.error.message} </p>}
              <button class="button is-primary">
              Entrar
              </button>
            </p>
          </div>
          <p> Si no tienes cuenta, regístrate <Link className="here" to="/signup">aquí</Link> </p>
        </form>
      </div>
</React.Fragment>
    );
  }
}

export default withRouter(Login);
