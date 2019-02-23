import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Money extends Component {

    onSubmitIncomes = (e) => {
      e.preventDefault();

      const API_URL = "https://evening-mesa-38422.herokuapp.com/api/v1"
      const link = `/${this.props.match.params.propertyId}/balance/`;

      fetch(`${API_URL}/departments/${this.props.match.params.departmentId}/incomes`,{
        method: "POST",
        headers: {
          'Content-Type' : 'application/json',
          'Authorization' : `bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          concept: e.target.concept.value,
          quantity: e.target.quantity.value,
          date: e.target.date.value,
          departmentId: this.props.match.params.departmentId,
          propertyId: this.props.match.params.propertyId
        })
      })
      .then(response => response.json())
      .then(data => {
        this.props.history.push(link)
      })
      .catch(e => alert (e));
    }

    onSubmitExpenses = (e) => {
      e.preventDefault();

      const API_URL = "https://evening-mesa-38422.herokuapp.com/api/v1"
      const link = `/${this.props.match.params.propertyId}/balance/`;

      fetch(`${API_URL}/departments/${this.props.match.params.departmentId}/expenses`,{
        method: "POST",
        headers: {
          'Content-Type' : 'application/json',
          'Authorization' : `bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          concept: e.target.concept.value,
          quantity: e.target.quantity.value,
          date: e.target.date.value,
          departmentId: this.props.match.params.departmentId,
          propertyId: this.props.match.params.propertyId
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.props.history.push(link)

      })
      .catch(e => alert (e));
    }
  render() {
    console.log(this.props.match.params.propertyId)
    return (
    <div className="section-money">
    <div class="field is-grouped ">
    <p class="control">
    <Link to={`/departments-registered/${this.props.match.params.propertyId}`} ><button class="button is-primary">
      Ir a deptos
    </button></Link>
    </p>
    </div>
      <div className="balance-columns">
        <div className="balance-columns-incomes">
          <p>
          Ingresos
          </p>
            <form className ="balance-inputs" onSubmit={ this.onSubmitIncomes } >
              <div class="field">
                <div class="control">
                  <input name= "concept" class="input is-info" type="text" placeholder="Concepto" />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input name= "quantity" class="input is-info" type="number" placeholder="Cantidad" />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input name= "date" class="input is-info" type="date" placeholder="Fecha" />
                </div>
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
      <div className="balance-columns-expenses">
        <p>
        Egresos
        </p>
          <form className ="balance-inputs" onSubmit={ this.onSubmitExpenses }>
            <div class="field">
              <div class="control">
                <input name= "concept" class="input is-info" type="text" placeholder="Concepto" />
              </div>
            </div>
            <div class="field">
              <div class="control">
              <input name= "quantity" class="input is-info" type="number" placeholder="Cantidad" />
              </div>
            </div>
            <div class="field">
              <div class="control">
              <input name= "date" class="input is-info" type="date" placeholder="Fecha" />
              </div>
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
      </div>
    </div>

    );
  }
}

export default Money;
