import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { CardColumns, Row, Col, Spinner } from 'reactstrap';
import Gnome from './Gnome/Gnome';
import FiltersForm from './FiltersForm/FiltersForm';
import ErrorUX from '../Error/Error';
import PropTypes from 'prop-types';
import { getFilteredGnomes, extractProfessions, getGnomesSelector } from '../../reducers/gnomes';
import './Dashboard.css'

class Dashboard extends PureComponent{

  state = {
    gnomes: this.props.gnomes,
    allGnomes: [],
  }

  getFiltered = (query) => {
    let filteredGnomes = getFilteredGnomes(this.state.allGnomes, query);
    this.setState({
      gnomes: filteredGnomes,
    });
  }

  componentWillReceiveProps({ gnomes }){
    if(gnomes !== this.props.gnomes){
      this.setState({
        gnomes: gnomes,
        allGnomes: gnomes,
      });
    }
  }

  render(){
    let gnomesUX = null;
    const { loading, error } = this.props; 
    const { gnomes } = this.state;
    const Error = error.status 
    ? <ErrorUX message={error.message} />  
    : null;
    if(!loading) {
      gnomesUX = gnomes.map(gnome => {
        return <Gnome key={gnome.id} gnome = {gnome} />
      });
    }else{
      gnomesUX = <Spinner color="secondary" className='mx-auto mt-5' />
    }
    return(
      <div className='dashboard-wrapper'> 
        {Error}
        <Row className="pt-5">
          <Col className="m-auto" sm="12" md="10">
            <FiltersForm 
              professions={this.props.professions}
              filterGnomesByQuery={this.getFiltered}
            />
          </Col>
        </Row>
        <Row>
          <Col className="m-auto" sm="12" md="10">
          <Row>
            <CardColumns className="m-auto">{ gnomesUX }</CardColumns>
          </Row>
          </Col>
        </Row>
      </div> 
    )
  };
}

const mapStateToProps = (state) => {
  return {
    gnomes : getGnomesSelector(state),
    loading: state.fetching.status,
    professions: extractProfessions(state),
    error: state.error,
  }
};

Dashboard.propTypes = {
  gnomes: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  professions: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Dashboard);