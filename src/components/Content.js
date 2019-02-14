import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Content extends Component {
  render() {
    return (
    <div className="section-content-home">
      <div className="section-home_call">
        <p> El <span className="text_blue"> mejor </span> software para <br /> administrar condominios </p>
        <Link className="button is-inverted is-outlined" to="/signup"><strong>¡Regístrate aquí!</strong></Link>
      </div>
    </div>
    );
  }
}

export default Content;
