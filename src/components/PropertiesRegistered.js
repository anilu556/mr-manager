import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class PropertiesRegistered extends Component {
  constructor(){
  super()
    this.state= {
    managers: [],
    local: '',
    properties: []
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
      this.getProperties(currentUser)
    })
  }

  getProperties = currentUser => {
   //console.log(currentUser)
   const managerId = currentUser[0]._id
   console.log(managerId)
   const API_URL = 'https://evening-mesa-38422.herokuapp.com/api/v1'
   fetch(`${API_URL}/managers/${this.state.manager._id}/properties`, {
     method: 'GET',
     headers: {
       'Content-Type' : 'application/json',
       "Authorization": `barear ${localStorage.getItem("token")}`
     }
   })
     .then(response => response.json())
     .then(data => {
       console.log(data)
       this.setState({
         properties: data.data
       })
     })
     .catch(e => alert(e))
 }

// handleOnClick = (e) => {
//   const propertyId = this.state.properties._id
//   console.log(propertyId)
//   const API_URL = 'https://evening-mesa-38422.herokuapp.com/api/v1'
//   fetch (`${API_URL}/properties/${this.state.properties._id}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type' : 'application/json',
//       "Authorization": `barear ${localStorage.getItem("token")}`
//     }
//   })
//   .then(response => response.json())
//   .then( data => {
//     this.setState({
//       properties: data.data
//     })
//   })
//   .catch(e => alert(e))
// }

  render() {
    return (
    <div className="section-properties">
      <p>
      Propiedades registradas
      </p>
      <table className="table is-striped is-bordered is-hoverable">
        <thead>
          <tr>
            <th>
              Nombre
            </th>
            <th>
              Calle y número
            </th>
            <th>
              Colonia
            </th>
            <th>
              Ciudad
            </th>
            <th>
              Deptos
            </th>
            <th>
              Borrar
            </th>
          </tr>
        </thead>
        <tbody>
        {this.state.properties.map(property => {
          return (
          <tr>
            <th>
              {property.name}
            </th>
            <td>
              {property.streetNumber}
            </td>
            <td>
              {property.colonia}
            </td>
            <td>
              {property.city}
            </td>
            <td>
              <p class="buttons">
              <Link to="/departments"><a class="button">
              <span class="icon is-small">
              <i class="fas fa-plus"></i>
              </span>
              </a></Link>
              </p>
            </td>
            <td>
              <p class="buttons">
              <button  class="button">
              <span class="icon is-small">
              <i class="fas fa-trash-alt"></i>
              </span>
              </button>
              </p>
            </td>
          </tr>
        )
          })
      }
        </tbody>
      </table>
      <div class="field is-grouped ">
      <p class="control">
      <Link to="/properties"><button class="button is-primary">
        Añadir Propiedad
      </button></Link>
      </p>
      </div>
    </div>

    );
  }
}

export default PropertiesRegistered;
