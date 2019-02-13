import React, { Component } from 'react';
import contact from '../images/contacto.png';

class Contact extends Component {
  render() {
    return (
    <div className="section-contact">
    <div className="section-contact-img">
      <img src={contact} alt="contacto"/>
    </div>
    <div className="section-contact-form" >  
      <div class="field">
        <label class="label">Nombre</label>
        <div class="control">
          <input class="input" type="text" />
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-danger" type="email" />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <label class="label">Mensaje</label>
        <div class="control">
          <textarea class="textarea" placeholder="Escribe tu mensaje"></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Enviar</button>
        </div>
      </div>
    </div>
  </div>
    );
  }
}

export default Contact;
