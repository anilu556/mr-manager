import React, { Component } from 'react';
import about from '../images/acerca.png';
import Navbar from './Navbar';

class About extends Component {
  render() {
    return (
    <div className="section-about">
    <React.Fragment>
      <Navbar />
      <div className="section-about-img">
        <img src={about} alt="acerca de"/>
      </div>
      <div className="section-about-p">
      <p>
      Mr. Manager te ayudará a llevar control de tus bienes, a estar más cerca de las necesidades de tus inquilinos y a reducir la carga de trabajo.
      </p>
      <p>
      Regístrate como manager, crea tus propiedades, da de alta a tus inquilinos y ¡Listo!
      </p>
      </div>
      </React.Fragment>
    </div>
    );
  }
}

export default About;
