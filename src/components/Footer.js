import React, { Component } from 'react';
import logo from '../images/logolar.png';
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
    <footer class="footer">
      <div class="content has-text-centered">
        <Link to="/"><img class="navbar-img" src={logo} alt="logo"/></Link>
        <p> by <a className="link_footer" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/anilu556/">Ana González</a></p>
      </div>
    </footer>
    );
  }
}

export default Footer;
