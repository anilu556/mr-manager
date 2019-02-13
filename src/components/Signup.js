import React, { Component } from 'react';

class Signup extends Component {
  render() {
    return (
    <div className="section-signup">
      <div className="signup-form">
      <p> ¡Regístrate y comienza a administrar tus propiedades! </p>
      <div class="field">
        <div class="control has-icons-left has-icons-right">
          <input class="input" type="text" placeholder="Name" />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        </div>
      </div>
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email" />
            <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password" />
            <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field is-grouped is-grouped-right">
    <p class="control">
      <a class="button is-primary">
        Submit
      </a>
    </p>
    <p class="control">
      <a class="button is-light">
        Cancel
      </a>
    </p>
  </div>
      </div>
    </div>
    );
  }
}

export default Signup;
