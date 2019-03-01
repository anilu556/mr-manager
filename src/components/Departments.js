import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Departments extends Component {


  onSubmitHandle = (e) => {
    e.preventDefault();

    const API_URL = "https://evening-mesa-38422.herokuapp.com/api/v1"
    const link = `/departments-registered/${this.props.match.params.propertyId}`

    fetch(`${API_URL}/properties/${this.props.match.params.propertyId}/departments`,{
      method: "POST",
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : `bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        department: e.target.department.value,
        tenant: e.target.tenant.value,
        phoneNumber: e.target.phoneNumber.value,
        email: e.target.email.value,
        propertyId: this.props.match.params.propertyId
      })
    })
    .then(response => response.json())
    .then(data => {
      alert("Has registrado correctamente el departamento")
      this.props.history.push(link)

    })
    .catch(e => alert (e));
  }

  render() {
    console.log(this.props.match.params.propertyId)
    return (
      <React.Fragment>
    <div className="section-departments">
    <p>
    Registra un nuevo departamento
    </p>
      <form className ="properties-inputs" onSubmit={ this.onSubmitHandle } >
        <div class="field">
          <div class="control">
          <input  name= "department" class="input is-info" type="text" placeholder="No. Depto" />
          </div>
        </div>
        <div class="field">
          <div class="control">
          <input name= "tenant" class="input is-info" type="text" placeholder="Inquilino" />
          </div>
        </div>
        <div class="field">
          <div class="control">
          <input name= "phoneNumber" class="input is-info" type="text" placeholder="Teléfono" />
          </div>
        </div>
        <div class="field">
          <div class="control">
          <input name= "email" class="input is-info" type="text" placeholder="Email" />
          </div>
        </div>
        <div class="field is-grouped is-grouped-right">
        <p class="control">
        <button type="submit" class="button is-primary">
          Registrar Depto
        </button>
        </p>
        <p class="control">
        <button class="button is-primary">
          Ir a deptos
        </button>
        </p>
        </div>
    </form>
    </div>
    </React.Fragment>
    );
  }
}

export default Departments;
