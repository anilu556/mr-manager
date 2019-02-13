import React, { Component } from 'react';
import logo from '../images/logolar.png';
import build from '../images/build2.png';
import login from '../images/login.png';
import register from '../images/register.png';
import select from '../images/select.png';
import graphs from '../images/graphs.png';
import Content from './Content';
import Login from './Login';
import Signup from './Signup';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Content />

        <div className="section-about-home">
          <p>
          Mr. Manager te ayudará a llevar control de tus bienes, a estar más cerca de las necesidades de tus inquilinos y a reducir la carga de trabajo.
          </p>
        </div>

        <div className="section-how">
        <div class="columns">
          <div class="column cols-how">
            <p><strong> Regístrate </strong></p>
            <p> Ingresa tus datos y comienza a administrar tus condominios. </p>
            <img class="column-img" src={login} alt="login"/>
          </div>
          <div class="column cols-how">
            <p> <strong> Selecciona </strong></p>
            <p> Entra al dashboard personalizado y elige la tarea a realizar. </p>
            <img class="column-img" src={select} alt="select"/>
          </div>
          <div class="column cols-how">
            <p><strong> Guarda </strong></p>
            <p> Da de alta nuevas propiedades e inquilinos y comienza a administrarlos. </p>
            <img class="column-img" src={register} alt="register"/>
          </div>
          <div class="column cols-how">
            <p><strong> Controla </strong></p>
            <p> Lleva el control de ingresos y egresos de cada propiedad. </p>
            <img class="column-img" src={graphs} alt="graphs"/>
          </div>
        </div>
      </div>

        <div className="section-contact-home">
          <p> ¡Contáctanos! </p>
        </div>
        <div className="section-footer-home">
          <p>
            ¡Lleva la administración de tus condominios a otro nivel!
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
