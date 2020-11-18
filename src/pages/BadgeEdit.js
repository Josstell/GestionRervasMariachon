import React from 'react';

import './styles/BadgeEdit.css';
//import header from '../images/Logotipo-1.png';
import AncientMexico from '../images/Ancient_Mexico.png';

import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading'
import api from '../apiGS';

class BadgeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
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
      playlist:''
    },
  };

  componentDidMount(){
    this.fetchData();
  }

  fetchData = async e => {
    this.setState({ loading: true, error: null })

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      console.log(data);
      this.setState({ loading: false, form : data});
    }catch (error){
      this.setState({ loading: false, error: error});
    }
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
      
      await api.badges.update(this.props.match.params.badgeId,this.state.form);
      this.setState({ loading: false });

      this.props.history.push(`/badges/${this.props.match.params.badgeId}`);
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  

  render() {
    if (this.state.loading){
      return <PageLoading />;
    }
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const date= new Date(this.state.form[0].date);

    const remainder = this.state.form[0].price - this.state.form[0].deposit;

    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img
            className="BadgeEdit__hero-image img-fluid"
            src={AncientMexico}
            alt="Logo"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                id={this.state.form[0].id || 'ID'}
                firstName={this.state.form[0].firstName || 'FIRST_NAME'}
                email={this.state.form[0].email || 'EMAIL'}
                address={this.state.form[0].address}
                date={date.toLocaleDateString('es-MX', options)}
                time={date.toLocaleTimeString()}
                mariachi={this.state.form[0].mariachi}
                phone={this.state.form[0].phone}
                service={this.state.form[0].service}
                price={this.state.form[0].price}
                deposit={this.state.form[0].deposit}
                remainder={remainder}
                message={this.state.form[0].message}
                playlist={this.state.form[0].playlist}
                coordinator={this.state.form[0].coordinator}


              //  twitter={this.state.form.twitter || 'twitter'}
              //  jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>

            <div className="col">
            <h1>Modificar reservación unicamente campos necesarios.</h1>
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

export default BadgeEdit;
