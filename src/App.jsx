import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGnomes } from './actions/gnomesRaw';
import isLocalStorageStale from './actions/helper/isLocalStorageStale';
import { getLocalStorageGnomes } from './actions/localStorage';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    if(isLocalStorageStale()) dispatch(getGnomes());
    else dispatch(getLocalStorageGnomes()) 
  }

  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default connect()(App);
