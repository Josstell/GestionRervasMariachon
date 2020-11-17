import React from 'react';

import './styles/Badge.css';
//import confLogo from '../images/badge-header.svg';
import mariachisEnPueblaLogo from '../images/Logotipo-1.png';
import AncientMexico from '../images/Ancient_Mexico.png';


import mariachi2000_logo from '../images/logos/mariachi2000_lg.png'
import mariachiAngeles_logo from '../images/logos/mariachiangeles_lg.png'
import mariachiAngelopolis_logo from '../images/logos/mariachiangelopolis_lg.png';
import mariachiCharros_logo from '../images/logos/mariachicharros_lg.png';
import mariachiOro_logo from '../images/logos/mariachioronacional_lg.png';
import mancilla_logo from '../images/logos/Mancilla_lg.jpg';
import mariachiSanJuan_logo from '../images/logos/Mariachisanjuan_lg.png';
import mariachiEstrella_logo from '../images/logos/MariachiEstrellas_lg.png';
import mariachiBrass_logo from '../images/logos/mariachibrass_lg.png';

//import Gravatar from './Gravatar';



var logoMariachi=[];
class Badge extends React.Component { 
  render() {

     if (this.props.mariachi==='Mariachi 2000 de Puebla'){
      logoMariachi=mariachi2000_logo;
     }
     else if (this.props.mariachi==='Mariachi Angeles de Puebla'){
      logoMariachi=mariachiAngeles_logo;
     }
     else if (this.props.mariachi==='Mariachi Angelopolis'){
      logoMariachi=mariachiAngelopolis_logo;
     }
     else if (this.props.mariachi==='Mariachi Charros de Puebla'){
      logoMariachi=mariachiCharros_logo;
     }
     else if (this.props.mariachi==='Mariachi Oro Nacional'){
      logoMariachi=mariachiOro_logo;
     }
     else if (this.props.mariachi==='Julian Mancilla'){
      logoMariachi=mancilla_logo;
     }
     else if (this.props.mariachi==='Mariachi Estrellas de Mexico'){
      logoMariachi=mariachiEstrella_logo;
     }
     else if (this.props.mariachi==='Mariachi Sn Juan'){
      logoMariachi=mariachiSanJuan_logo;
     }
     else if (this.props.mariachi==='Mariachi Brass'){
      logoMariachi=mariachiBrass_logo;
     }else{
      logoMariachi=AncientMexico;

     }

    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={mariachisEnPueblaLogo} alt="Logo Mariachis en Puebla" />
        </div>

        <div className="Badge__section-name">
        <img className="Badge__avatar" src={logoMariachi} alt='Logo_mariachi'/>
          {/* <Gravatar className="Badge__avatar" email={this.props.email} /> */}
          <h4>
          <strong>Reserva: </strong> {this.props.id}<br /> <strong>Cliente: </strong>  {this.props.firstName} 
          </h4>
        </div>

        <div className="Badge__section-info">
          <h6> <strong>Fecha: </strong>{this.props.date}</h6>
          <div><strong>Hora: </strong>{this.props.time}</div>
          <div><strong>Dirección: </strong>{this.props.address}</div>
          <div><strong>Telefono: </strong>{this.props.phone}</div>
          <div><strong>Mariachi: </strong>{this.props.mariachi}</div>
          <div><strong>Servicio: </strong>{this.props.service}</div>
          <div><strong>Precio: </strong>{this.props.price}</div>
          <div><strong>Deposito: </strong>{this.props.deposit}</div>
          <div><strong>Resta: </strong>{this.props.remainder}</div>
          <div><strong>Mensaje: </strong>{this.props.message}</div>
          <div><strong>Lista canciones: </strong>{this.props.playlist}</div>


        </div>

        <div className="Badge__footer"><b>Coordinador:  </b>{this.props.coordinator}</div>
      </div>
    );
  }
}

export default Badge;
