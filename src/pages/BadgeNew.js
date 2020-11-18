import React from 'react';

import './styles/BadgeNew.css';
//import header from '../images/Logotipo-1.png';
import AncientMexico from '../images/Ancient_Mexico.png';

import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading'
import api from '../apiGS';

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: [{
      id: '',
      date: '',
      time: '',
      address: '',
      mariachi: '',
      firstName: '',
      phone: '',
      email: '',
      service: '',
      price: '',
      deposit:'',
      remainder: '',
      message: '',
      playlist:'',

      lastName: '', //no
      jobTitle: '',//no
      twitter: '',//no
    }
  ]
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await  api.badges.create(this.state.form);
      this.setState({ loading: false });

      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

 

    componentDidMount(){
      this.setState({
        form: {
          ...this.state.form,
          code: this.codigo(),
        },
      });
    }

    codigo = ()=>{
      function makeid (length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
      }
      return makeid(8);
    }

  render() {
    if (this.state.loading){
      return <PageLoading />;
    }

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    var date = new Date(this.state.form.date)
    var fecha=''
    var hora=''

    if (this.state.form.date !==''){
       fecha= date.toLocaleDateString('es-MX', options)
       hora =date.toLocaleTimeString()
      
    }

    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-image img-fluid"
            src={AncientMexico}
            alt="Logo"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                id= {this.state.form.code}
                firstName={this.state.form.firstName || 'NOMBRE CLIENTE'}
                email={this.state.form.email || 'EMAIL'}
                date={fecha || 'FECHA'}
                time={hora || 'HORA'}
                address={this.state.form.address || 'DIRECCIÓN'}
                phone = {this.state.form.phone || 'TELEFONO'}
                mariachi= {this.state.form.mariachi || 'MARIACHI'}
                service = {this.state.form.service || 'SERVICIO'}
                price= {this.state.form.price || 'PRECIO'}
                deposit = {this.state.form.deposit || 'DEPOSITO'}
                remainder = {(this.state.form.price - this.state.form.deposit) || 'RESTA A PAGAR'}
                message = {this.state.form.message || 'MENSAJE'}
                playlist= {this.state.form.playlist || 'LISTA CANCIONES'}
              />
            </div>

            <div className="col">
            <h1>Nueva reserva</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
