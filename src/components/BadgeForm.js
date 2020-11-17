import React from 'react';

class BadgeForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>

           <div className="form-group">
            <label>Reserva</label>
            <input
              className="form-control"
              type="text"
              name="reserve"
              value={!this.props.formValues.code ? this.props.formValues[0].id :this.props.formValues.code }
              onChange={this.props.onChange}
              readOnly
            />
          </div>

          <div className="form-group">
            <label>Modificar Fecha y hora</label>
            <input
              className="form-control"
              type="datetime-local"
              name="date"
              // value={date}
              onChange={this.props.onChange}
            />
          </div>

          {/* <div className="form-group">
            <label>Hora</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.time}
            />
          </div> */}

          <div className="form-group">
            <label>Dirección</label>
            <input
              className="form-control"
              type="text"
              name="address"
              // value={address}
              onChange={this.props.onChange}
              placeholder='Modificar/poner Dirección.'
            />
          </div>


          <div className="form-group">
            <label>Mariachi</label>
            <input
              list="mariachis"
              className="form-control"
              type="text"
              name="mariachi"
              onChange={this.props.onChange}
              // value={this.props.formValues[0].mariachi}
              placeholder='Modificar/poner Mariachi.'

            />
              <datalist id="mariachis" >
              <option value="Mariachi 2000 de Puebla" />
              <option value="Mariachi Angeles de Puebla" />
              <option value="Mariachi Angelopolis" />
              <option value="Mariachi Charros de Puebla" />
              <option value="Mariachi Oro Nacional" />
              <option value="Mariachi Estrellas de Mexico" />
              <option value="Mariachi Sn Juan" />
              <option value="Mariachi Brass" />
            </datalist>            
          </div>

          <div className="form-group">
            <label>Nombre cliente</label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              placeholder='Modificar/poner nombre ?'
             // value={this.props.formValues[0].firstName}
              onChange={this.props.onChange}
            />
          </div>

          <div className="form-group">
            <label>Telefono</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="tel"
              name="phone"
              placeholder='Modificar/poner Telefono de contacto.'

             // value={this.props.formValues[0].phone}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              placeholder='Modificar/poner email.'
            />
          </div>



          <div className="form-group">
          <label>Servicio</label>
            <input
              list="servicios"
              className="form-control"
              type="text"
              name="service"
              onChange={this.props.onChange}
              // value={this.props.formValues[0].mariachi}
              placeholder='Modificar/poner servicio.'

            />
              <datalist id="servicios" >
              <option value="Serenata" />
              <option value="1 hora" />
              <option value="2 horas" />
              <option value="3 horas" />
              <option value="4 horas" />
              <option value="5 horas" />
            </datalist>      
          </div>

          <div className="form-group">
            <label>Precio</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="price"
              placeholder='Modificar/poner precio'
            //  value={this.props.formValues[0].price}
            />
          </div>

          <div className="form-group">
            <label>Deposito</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="deposit"
              placeholder='Modificar/poner anticipo.'
            />
          </div>

          {/* <div className="form-group">
            <label>Resta</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues[0].remainder}
            />
          </div> */}

          <div className="form-group">
            <label>Mensaje</label>
            <textarea
              rows="3" 
              cols="50"
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="message"
              placeholder='Modificar/poner mensaje.'
            />
          </div>

          <div className="form-group">
            <label>Lista de canciones</label>
            <textarea
              rows="4" 
              cols="50"
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="playlist"
              placeholder='Modificar/poner lista de canciones.'
            />
          </div>
          {/* <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div> */}

          {/* <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div> */}

          <button onClick={this.handleClick} className="btn btn-primary">
            Guardar
          </button>
          {this.props.error && 
                       <div className="alert alert-danger mb-3" role="alert">
                           {this.props.error.message}
                       </div> 
                    } 

        </form>
      </div>
    );
  }
}

export default BadgeForm;
