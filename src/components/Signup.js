import React, { Component } from 'react';

class Signup extends Component {

  onSubmitHandle = (e) => {
    e.preventDefault();

    const API_URL = "https://evening-mesa-38422.herokuapp.com/api/v1"

    fetch(`${API_URL}/auth/signup`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value
      })
    })
    .then(response => response.json())
    .then(data => {
      this.props.history.push('/login')
      console.log(data)
    })
    .catch(e => alert (e));
  }

  render() {
    return (
      <React.Fragment>
    <div className="section-signup" >
      <form className="signup-form" onSubmit={ this.onSubmitHandle }>
      <p> ¡Regístrate y comienza a administrar tus propiedades! </p>
      <div class="field">
        <div class="control has-icons-left has-icons-right">
          <input name="name" class="input" type="text" placeholder="Nombre" />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        </div>
      </div>
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
            <input name="password" class="input" type="password" placeholder="Contraseña" />
            <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field is-grouped is-grouped-right">
    <p class="control">
      <button class="button is-primary">
        Registrar
      </button>
    </p>
  </div>
  </form>
</div>
</React.Fragment>
    );
  }
}

export default Signup;
