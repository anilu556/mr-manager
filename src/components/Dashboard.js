import React, { Component } from 'react';

class Dashboard extends Component {


  render() {
    // console.log(localStorage.getItem('token'))
    return (
    <div className="section-dashboard">
      <div class="columns">
        <div class="column column-dashboard">
          <p>Añadir propiedades</p>
          <a class="button is-link is-hovered">Hover</a>
        </div>
        <div class="column column-dashboard">
          <p>Añadir deptos</p>
          <a class="button is-link is-hovered">Hover</a>
        </div>
        <div class="column column-dashboard">
          <p>Third column</p>
          <a class="button is-link is-hovered">Hover</a>
        </div>
      </div>
    </div>

    );
  }
}

export default Dashboard;
