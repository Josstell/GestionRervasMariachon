import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
//import confLogo from '../images/badge-header.svg';
import mariachisEnPueblaLogo from '../images/Logotipo-1.png';
//import AncientMexico from '../images/Ancient_Mexico.png';

import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../apiGS';
import MiniLoader from '../components/MiniLoader';

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
    this.intervalId = setInterval(this.fetchData, 50000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={mariachisEnPueblaLogo}
                alt="Mariachis en Puebla Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              Nueva reserva
            </Link>
          </div>

          <BadgesList badges={this.state.data} />
          {this.state.loading && <MiniLoader/>}
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
