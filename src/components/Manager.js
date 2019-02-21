import React, { Component } from 'react';
import login from '../images/login.png';
import register from '../images/register.png';
import select from '../images/select.png';
import graphs from '../images/graphs.png';
import ContentLogged from './ContentLogged';

class Home extends Component {
  render() {
    console.log(localStorage.getItem('token'))
    return (
    <div className="section-home">
      <React.Fragment>
        <ContentLogged />

        <div className="section-about-home">
          <div>
            <p>
            Mr. Manager te ayudará a llevar control de tus bienes, a estar más cerca de las necesidades de tus inquilinos y a reducir la carga de trabajo.
            </p>
          </div>
        </div>

      <div className="section-how-home">
        <div className="how-columns-home">
          <div class="cols-how-home">
            <p align="left"><strong> Regístrate </strong> <br />Crea tu cuenta como manager, solo tienes que ingresar tu nombre, correo electrónico y contraseña para poder empezar a administrar tus condominios.</p>
            <img class="column-img" src={login} alt="login"/>
          </div>
        </div>
        <div className="how-columns-home">
          <div class="cols-how-home">
            <img class="column-img" src={select} alt="select"/>
            <p align="right"><strong> Selecciona </strong><br /> Una vez que tienes tu cuenta de manager, podrás entrar al dashboard personalizado, en donde podrás seleccionar la tarea a realizar con cada propiedad.</p>
          </div>
        </div>
        <div className="how-columns-home">
          <div class="cols-how-home">
            <p align="left"><strong> Guarda </strong><br /> ¿Necesitas guardar otra propiedad u otro inquilino? Solo tienes que ingresar los datos de cada uno y los tendrás en tu base de datos.</p>
            <img class="column-img" src={register} alt="select"/>
          </div>
        </div>
        <div className="how-columns-home">
          <div class="cols-how-home">
            <img class="column-img" src={graphs} alt="select"/>
            <p align="right"><strong> Controla </strong><br /> Mr. Manager hace las cuentas por ti para que puedas llevar el control de ingresos y egresos de cada propiedad.</p>
          </div>
        </div>
      </div>

        <div className="section-footer-home">
          <p>
            ¡Lleva la administración de tus condominios a otro nivel!
          </p>
        </div>
      </React.Fragment>
    </div>
    );
  }
}

export default Home;
