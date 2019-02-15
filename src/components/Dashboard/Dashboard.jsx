import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Spinner } from 'reactstrap';
import Gnome from './Gnome/Gnome';
import FiltersForm from './FiltersForm/FiltersForm';
import { getFilteredGnomes, extractProfessions } from '../../reducers/gnomes';
import './Dashboard.css'

class Dashboard extends Component{

  state = {
    gnomes: this.props.gnomes,
    allGnomes: this.props.gnomes,
  }

  getFiltered = (query) => {
    let filteredGnomes = getFilteredGnomes(this.state.allGnomes, query);
    this.setState({
      gnomes: filteredGnomes,
    });
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.gnomes !== this.props.gnomes){
        this.setState({
          gnomes: nextProps.gnomes,
          allGnomes: nextProps.gnomes,
        });
    }
  }

  render(){
    let gnomesUX = null;
    const { loading } = this.props; 
    const { gnomes } = this.state;
    if(!loading) {
      gnomesUX = gnomes.map(gnome => {
        return <Gnome key={gnome.id} gnome = {gnome} />
      });
    }else if(loading) {
      gnomesUX = <Spinner color="secondary" className='mx-auto mt-5' />
    }
    return(
      <div className='dashboard-wrapper'> 
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
            <Row>{ gnomesUX }</Row>
          </Col>
        </Row>
      </div> 
    )
  };
}

const mapStateToProps = ({ gnomes, fetching }) => {
  return {
    gnomes : gnomes.gnomes,
    loading: fetching.status,
    professions: extractProfessions(gnomes.gnomes),
  }
};

export default connect(mapStateToProps)(Dashboard);