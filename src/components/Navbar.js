import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css';
import MarichisEnPueblaLogo from '../images/Logotipo-1.png';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={MarichisEnPueblaLogo} alt="Logo" />
            <span className="font-weight-light">Gestión</span>
            <span className="font-weight-bold"> Reservas</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
