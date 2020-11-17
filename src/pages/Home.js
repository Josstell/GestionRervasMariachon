import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import mariachisEnPueblaLogo from '../images/Logotipo-1.png';
import AncientMexico from '../images/Ancient_Mexico.png';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
              <img
                src={mariachisEnPueblaLogo}
                alt="Mariachis en Puebla Logo"
                className="img-fluid mb-2"
              />

              <h1>Sistema de Gestión de reservaciones.</h1>
              <Link className="btn btn-primary" to="/badges">
                Inicio
              </Link>
            </div>

            <div className="Home__col d-none d-md-block col-md-8">
              <img
                src={AncientMexico}
                alt="Astronauts"
                className="img-fluid p-4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
