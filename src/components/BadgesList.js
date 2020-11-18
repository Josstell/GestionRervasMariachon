import React from 'react';
import { Link } from 'react-router-dom';

import mariachi2000_logo from '../images/logos/mariachi2000_lg.png';
import mariachiAngeles_logo from '../images/logos/mariachiangeles_lg.png';
import mariachiAngelopolis_logo from '../images/logos/mariachiangelopolis_lg.png';
import mariachiCharros_logo from '../images/logos/mariachicharros_lg.png';
import mariachiOro_logo from '../images/logos/mariachioronacional_lg.png';
import mancilla_logo from '../images/logos/Mancilla_lg.jpg';
import mariachiSanJuan_logo from '../images/logos/Mariachisanjuan_lg.png';
import mariachiEstrella_logo from '../images/logos/MariachiEstrellas_lg.png';
import mariachiBrass_logo from '../images/logos/mariachibrass_lg.png';

import './styles/BadgesList.css';
//import Gravatar from './Gravatar';

var logoMariachi=[];

class BadgesListItem extends React.Component {
   
  render() {

    if (this.props.badge.mariachi==='Mariachi 2000 de Puebla' || 'Mariachi Nuevo 2000'){
      logoMariachi=mariachi2000_logo;
     }
     if (this.props.badge.mariachi==='Mariachi Angeles de Puebla'){
      logoMariachi=mariachiAngeles_logo;
     }
     if (this.props.badge.mariachi==='Mariachi Angelopolis'){
      logoMariachi=mariachiAngelopolis_logo;
     }
     if (this.props.badge.mariachi==='Mariachi Charros de Puebla'){
      logoMariachi=mariachiCharros_logo;
     }
     if (this.props.badge.mariachi==='Mariachi Oro Nacional'){
      logoMariachi=mariachiOro_logo;
     }
     if (this.props.badge.mariachi==='Julian Mancilla'){
      logoMariachi=mancilla_logo;
     }
     if (this.props.badge.mariachi==='Mariachi Estrellas de Mexico'){
      logoMariachi=mariachiEstrella_logo;
     }
     if (this.props.badge.mariachi==='Mariachi Sn Juan'){
      logoMariachi=mariachiSanJuan_logo;
     }
     if (this.props.badge.mariachi==='Mariachi Brass'){
      logoMariachi=mariachiBrass_logo;
     }
     
     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

     const date= new Date(this.props.badge.date);

    return (
      <div className="BadgesListItem">
        <img className="BadgesListItem__avatar" src={logoMariachi} alt='Logo_mariachi'/>

        <div>
          <strong>
            Reserva: {this.props.badge.id} <br/> Cliente: {this.props.badge.firstName} 
          </strong>
          <br /><b>Mariachi:</b> {this.props.badge.mariachi}
          <br /><b>Coordinador:</b> {this.props.badge.coordinator}
          <br /><b>Servicio:</b> {this.props.badge.service}
          <br /><b>Fecha: </b>{date.toLocaleDateString('es-MX', options)}
          <br /><b>Hora:</b> {date.toLocaleTimeString()}
        </div>
      </div>
    );
  }
}

function useFilterByItem(){
  const [item, setItem]=React.useState('1');

  //console.log('Hola: ' + item);
  
  return {item, setItem};

}


function useSearchBadges(badges,item) {
  const [query, setQuery] = React.useState('');
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
   
    const result = badges.filter((badge) => {
      if (item==='1'){
        return `${badge.id}`
        // ${badge.lastName}`
          .toLowerCase()
          .includes(query.toLowerCase());
      
      }

      if (item==='2'){
        return `${badge.firstName}`
        // ${badge.lastName}`
          .toLowerCase()
          .includes(query.toLowerCase());
      
      }
      if (item==='3'){
        return `${badge.mariachi}`
        // ${badge.lastName}`
          .toLowerCase()
          .includes(query.toLowerCase());
      
      }
      if (item==='4'){
        return `${badge.coordinator}`
        // ${badge.lastName}`
          .toLowerCase()
          .includes(query.toLowerCase());
      
      }
      if (item==='5'){
        return `${badge.service}`
        // ${badge.lastName}`
          .toLowerCase()
          .includes(query.toLowerCase());
      
      }
      if (item==='6'){
        return `${badge.date}`
        // ${badge.lastName}`
          .toLowerCase()
          .includes(query.toLowerCase());
      
      }
     return '';
    });

    setFilteredBadges(result);
  }, [badges, query, item]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;

  const {item, setItem} = useFilterByItem();


  const { query, setQuery, filteredBadges } = useSearchBadges(badges,item);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filtrar reservas por:</label>
          <select className="mdb-select md-form" 
          value={item} 
          onChange={e =>{
             setItem(e.target.value);
          }}
          >
            <option value="1" className="mdb-select md-form" >reserva</option>
            <option value="2" className="mdb-select md-form" >nombre</option>
            <option value="3" className="mdb-select md-form" >mariachi</option>
            <option value="4" className="mdb-select md-form" >coordinator</option>
            <option value="5" className="mdb-select md-form" >servicio</option>
            <option value="6" className="mdb-select md-form" >fecha</option>
          </select>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>

        <h3>No se encontraron reservas.</h3>
        <Link className="btn btn-primary" to="/badges/new">
            Crear nueva Reserva
        </Link>
      </div>
    );
  }

  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filtrar reservas por : </label>
        <select className="mdb-select md-form"  value={item} onChange={e =>{
            setItem(e.target.value);
          }}>
            <option value="1" className="mdb-select md-form" >reserva</option>
            <option value="2" className="mdb-select md-form" >nombre</option>
            <option value="3" className="mdb-select md-form" >mariachi</option>
            <option value="4" className="mdb-select md-form" >coordinator</option>
            <option value="5" className="mdb-select md-form" >servicio</option>
            <option value="6" className="mdb-select md-form" >fecha</option>
          </select>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>

      <ul className="list-unstyled">
        {filteredBadges.map(badge => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;
