import React, { Component } from 'react';
import NavbarLogged from './NavbarLogged';

class Departments extends Component {

  constructor(){
  super()
    this.state= {
    managers: [],
    local: '',
    property: []
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
      // console.log(data.managers)
      this.setState({
        managers: data.managers
      })

      const token = localStorage.getItem('token')
      let base64Url = token.split('.')[1]
      let base64 = base64Url.replace('-','+').replace('_','/')
      const t = JSON.parse(window.atob(base64))
      // console.log(t.email)
      const currentUser = this.state.managers.filter(manager => {
        if(manager.email === t.email) {
          this.setState({ managers : manager})
        // console.log(manager._id)
        return manager
        }
      })
    })
  }
 //
 //  getProperties = () => {
 //
 //   const API_URL = 'https://evening-mesa-38422.herokuapp.com/api/v1'
 //   fetch(`${API_URL}/managers/${this.state.manager._id}/properties`, {
 //     method: 'GET',
 //     headers: {
 //       'Content-Type' : 'application/json',
 //       "Authorization": `barear ${localStorage.getItem("token")}`
 //     }
 //   })
 //     .then(response => response.json())
 //     .then(data => {
 //       console.log(data)
 //       this.setState({
 //         properties: data.data
 //       })
 //     })
 //     .catch(e => alert(e))
 // }

  onSubmitHandle = (e) => {
    e.preventDefault();

    const API_URL = "https://evening-mesa-38422.herokuapp.com/api/v1"

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
      this.props.history.push('/departments-registered')
    })
    .catch(e => alert (e));
  }

  render() {
    console.log(this.props.match.params.propertyId)
    return (
      <React.Fragment>
        <NavbarLogged />
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
        <button class="button is-primary">
          Registrar Depto
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
