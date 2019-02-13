import React, { Component } from 'react';
import login from '../images/login.png';
import register from '../images/register.png';
import select from '../images/select.png';
import graphs from '../images/graphs.png';
import how from '../images/como.png';

class How extends Component {
  render() {
    return (
    <div className="section-how">
    <div className="section-how-img">
      <img src={how} alt="cómo funciona"/>
    </div>
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

    );
  }
}

export default How;
