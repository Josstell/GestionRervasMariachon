import React from 'react';
import { Link } from 'react-router-dom';
//import DeleteBadgeModal from '../components/DeleteBadgeModal'
import history from '../helpers/history';


import './styles/BadgeDetails.css';
import AncientMexico from '../images/Ancient_Mexico.png';
import Badge from '../components/Badge';
import api from '../apiGS';




function useFilterByItem(){
  const [item, setItem]=React.useState('');

  //console.log('Hola: ' + item);
  
  return {item, setItem};

}

function useCreateUrlWhatsApp(item, badgess){
  const { itemState, seturlState}= React.useState('');
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  console.log('Hola :');
  console.log(badgess);
  const date= new Date(badgess[0].date);
  console.log(date);

  const sl= "%0A";

  let sendMariachi=0;
  let address_norm= badgess[0].address;

  const remainder = badgess[0].price - badgess[0].deposit;

  console.log(address_norm);


  address_norm= address_norm.replace('#','%23');
 
  console.log(itemState);

  if(item==='Richard') {sendMariachi= 522222704053}; //'Richard'
  if(item==='Timoteo') {sendMariachi= 522224229659}; //'Timoteo'
  if(item==='Angel') {sendMariachi= 522223507263}; //'Angel'
  if(item==='Ruben') {sendMariachi= 522441184262}; //'Ruben'
  if(item==='Richard Sn Juan') {sendMariachi= 522441063233}; //'Richard Sn Juan'
  if(item==='Eder') {sendMariachi= 522223482342}; //'Eder'
  if(item==='Julian') {sendMariachi= 522221357430};  //'Julian'

  //https://api.whatsapp.com/send?phone=

  const url = "https://wa.me/"+sendMariachi+
              "?text=*Reserva:* "+badgess[0].id+sl+
              "*Nombre:* "+badgess[0].firstName+sl+
              "*Fecha:*"+date.toLocaleDateString('es-MX', options) +sl+
              "*Hora:* "+ date.toLocaleTimeString()+sl+
              "*Dirección:* "+address_norm+sl+
              "*Mariachi:* "+badgess[0].mariachi+sl+ 
              "*Teléfono:* "+badgess[0].phone+sl+
              "*Servicio:* "+badgess[0].service +sl+
             "*Precio:* $"+ badgess[0].price+sl+
             "*Deposito:* $"+ badgess[0].deposit+sl+
             "*Resta a pagar:* $"+remainder+sl+
             "*Mensaje:* "+badgess[0].message+sl+
             "*Lista de canciones*" + badgess[0].playlist+sl+
             "*Ubicación:* ";  

  


    return {itemState, seturlState, url};

}

const guardar= async (badge,item,url)=> {
 //let history = useHistory();

  try {
    window.open(url, '_blank');

    await api.badges.update(badge[0].id,{...badge, item:item});

   // this.setState({ loading: false });

    history.push(`/badges/${badge[0].id}`);
    //history.push('/');

  } catch (error) {
    return false;
   // this.setState({ loading: false, error: error });
  }

  
}


function handleSubmit(badge, item, url){

  if (item!==''){
    guardar(badge, item,url);
}
}


function BadgeDetails(props) {

  const badge = props.badge;



  //console.log(`Address : ${badge[0].address}`);


  const {item, setItem} = useFilterByItem();

  const {url} = useCreateUrlWhatsApp(item, badge);

 

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  const date= new Date(badge[0].date);

  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img className='logo_mexicoAcient' src={AncientMexico} alt="Logo de la Conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                <b>Estado: </b> {(badge[0].coordinator ==='Pendiente a enviar!!!') ? 'No enviado.' : `Enviado a ${badge[0].coordinator}` }
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              id={badge[0].id}
              firstName={badge[0].firstName}
              address={badge[0].address}
              email={badge[0].email}
              date={date.toLocaleDateString('es-MX', options)}
              time={date.toLocaleTimeString()}
              mariachi={badge[0].mariachi}
              coordinator={badge[0].coordinator}
              phone={badge[0].phone}
              service={badge[0].service}
              price={badge[0].price}
              deposit={badge[0].deposit}
              remainder={badge[0].price - badge[0].deposit}
              playlist = {badge[0].playlist}
              message={badge[0].message}

             // twitter={badge.twitter}=== '' ? badge[0].deposit :0
             // jobTitle={badge.jobTitle}
            />
          </div>
          <div className="col">
            <h2>Acciones</h2>
            <div>
              <div>
              {/* <button onClick={() => {setCount(count+1)}} className="btn btn-primary mr-4">
                Increase Count: {count}
              </button> */}
                <Link
                  className="btn btn-primary mb-4"
                  to={`/badges/${badge[0].id}/edit`}
                >
                  Editar
                </Link>
              </div>

              {/* <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">Borrar</button>
                <DeleteBadgeModal 
                isOpen={props.modalIsOpen} 
                onClose={props.onCloseModal}
                onDeleteBadge={props.onDeleteBadge}  
                /> 
              </div> */}

            

              <form className="needs-validation" noValidate>
                <label> Elige coordinador para enviar whatsApp.</label> <br />
                <select className="mdb-select validate md-form mt-4"  
                        value={item} 
                        onChange={e =>{
                          setItem(e.target.value);
                 }}>
                  <option value="" disabled defaultValue>Elige coordinator</option>
                  <option value="Richard">Richard</option>
                  <option value="Timoteo">Timoteo</option>
                  <option value="Angel">Angel</option>
                  <option value="Ruben">Ruben</option>
                  <option value="Richard (Camilos)">Richard (Camilos)</option>
                  <option value="Eder">Eder</option>
                  <option value="Julian">Julian</option>
                </select>
                <br/><button onClick={handleSubmit(badge,item,url)} className="btn btn-info mt-4" >Actualizar datos</button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
