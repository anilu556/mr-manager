import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (
    <div className="section-dashboard">
      <div class="columns">
        <div class="column column-dashboard">
          <p>First column</p>
          <a class="button is-link is-hovered">Hover</a>
        </div>
        <div class="column column-dashboard">
          <p>Second column</p>
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
