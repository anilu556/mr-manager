import React, { Component } from 'react';
import NavbarLogged from './NavbarLogged';
import {Link} from 'react-router-dom';

class DepartmentsRegistered extends Component {

    render() {
      console.log(this.props.match.params.propertyId)
      return (
      <React.Fragment>
        <NavbarLogged />
        <div className="section-departments">
          <p>
          Departamentos registrados
          </p>
          <table className="table is-striped is-bordered is-hoverable">
            <thead>
              <tr>
                <th>
                  No. Depto
                </th>
                <th>
                  Inquilino
                </th>
                <th>
                  Teléfono
                </th>
                <th>
                  Email
                </th>
                <th>
                  Borrar
                </th>
              </tr>
            </thead>
          <tbody>
            <tr>
              <th>

              </th>
              <td>

              </td>
              <td>

              </td>
              <td>

              </td>
              <td >
                <p class="buttons">

                <button

                  style={{border: '1px solid red'}}
                  class="button">

                <span class="icon is-small">
                <i class="fas fa-trash-alt"></i>
                </span>
                </button>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="field is-grouped ">
        <p class="control">
        <Link to="/departments"><button class="button is-primary">
          Añadir Depto
        </button></Link>
        </p>
        </div>
      </div>
  </React.Fragment>
      );
    }
}

export default DepartmentsRegistered;
