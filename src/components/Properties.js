import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Properties extends Component {
  constructor(){
  super()
    this.state= {
    managers: [],
    local: ''
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
        if(manager.email === t.email) {
          this.setState({ manager : manager})
        // console.log(manager._id)
        return manager
        }
      })
    })
  }

  onSubmitHandle = (e) => {
    console.log(this.state.manager._id)
    e.preventDefault();

    const API_URL = "https://evening-mesa-38422.herokuapp.com/api/v1"

    fetch(`${API_URL}/managers/${this.state.manager._id}/properties`,{
      method: "POST",
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : `bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        name: e.target.name.value,
        streetNumber: e.target.streetNumber.value,
        colonia: e.target.colonia.value,
        city: e.target.city.value,
        managerId: this.state.manager._id
      })
    })
    .then(response => response.json())
    .then(data => {
      this.props.history.push('/properties-registered')
    })
    .catch(e => alert (e));
  }

  render() {
    // console.log(localStorage.getItem('token'))
    return (
      <React.Fragment>
    <div className="section-properties">
    <p>
    Registra una nueva propiedad
    </p>
      <form className ="properties-inputs" onSubmit={ this.onSubmitHandle }>
        <div class="field">
          <div class="control">
          <input  name= "name" class="input is-info" type="text" placeholder="Nombre propiedad" />
          </div>
        </div>
        <div class="field">
          <div class="control">
          <input name= "streetNumber" class="input is-info" type="text" placeholder="Calle y número" />
          </div>
        </div>
        <div class="field">
          <div class="control">
          <input name= "colonia" class="input is-info" type="text" placeholder="Colonia" />
          </div>
        </div>
        <div class="field">
          <div class="control">
          <input name= "city" class="input is-info" type="text" placeholder="Ciudad" />
          </div>
        </div>
        <div class="field is-grouped is-grouped-right">
        <p class="control">
        <button class="button is-primary">
          Registrar Propiedad
        </button>
        </p>
        <p class="control">
        <Link to="/properties-registered"><button class="button is-primary">
          Ir a propiedades
        </button></Link>
        </p>
        </div>
    </form>
  </div>
  </React.Fragment>
    );
  }
}

export default Properties;
