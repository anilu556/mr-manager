import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import request from 'superagent';

class DepartmentsRegistered extends Component {
  constructor(){
  super()
    this.state ={
      departments: [],
      departmentsId: ''
    }
  }

componentDidMount(){
  this.getDepartments()
}

handleDelete = (id) => {
  console.log(id)
  const API_URL = 'https://evening-mesa-38422.herokuapp.com/api/v1'
  fetch (`${API_URL}/departments/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type' : 'application/json',
      "Authorization": `bearer ${localStorage.getItem("token")}`
    }
  })
  .then(response => response.json())
  .then( data => {
    this.getDepartments()
    // console.log(data)
  })
  .catch(e => alert(e))
}

getDepartments = () => {
  fetch(`https://evening-mesa-38422.herokuapp.com/api/v1/properties/${this.props.match.params.propertyId}/departments`, {
    method: 'GET',
    headers: { "Authorization" : `bearer ${localStorage.getItem("token")}`
  }
})
.then( response => response.json())
.then( data =>{
  console.log(data)
  this.setState({
    departments: data.data
  })
})
.catch(e => alert(e))
  }

    render() {
      console.log(this.props.match.params.propertyId)
      return (
      <React.Fragment>
        <div className="section-departments">
          <p>
          Departamentos registrados
          </p>
          <table className="table is-striped is-bordered is-hoverable">
            <thead>
              <tr>
                <th>
                  No. Depto
                </th>
                <th>
                  Inquilino
                </th>
                <th>
                  Teléfono
                </th>
                <th>
                  Email
                </th>
              </tr>
            </thead>
          <tbody>
          {this.state.departments.map(department => {
            console.log(department._id)
            return (
            <tr>
              <th>
                {department.department}
              </th>
              <td>
                {department.tenant}
              </td>
              <td>
                {department.phoneNumber}
              </td>
              <td>
                {department.email}
              </td>
              <td>
                <p class="buttons">
                <Link to={`/${department.propertyId}/${department._id}/money/`}><button class="button action">
                <span class="icon is-small">
                <i class="fas fa-dollar-sign"></i>
                </span>
                </button></Link>
                </p>
              </td>
              <td>
                <p class="buttons">
                <Link to={`/${department.propertyId}/balance`}><button class="button action">
                <span class="icon is-small">
                <i class="fas fa-balance-scale"></i>
                </span>
                </button></Link>
                </p>
              </td>
              <td >
                <p class="buttons">
                <button
                  onClick = {() => this.handleDelete(department._id)}
                  style={{border: '1px solid red'}}
                  class="button">
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
        <Link to={`/departments/${this.props.match.params.propertyId}`}><button class="button is-primary">
          Añadir Depto
        </button></Link>
        </p>
        <p class="control">

        <Link to="/properties-registered"><button class="button is-primary">
          Ir a propiedades
        </button></Link>
        </p>
        </div>
      </div>
  </React.Fragment>
      );
    }
}

export default DepartmentsRegistered;
