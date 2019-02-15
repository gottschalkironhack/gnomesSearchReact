import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGnomes } from './actions/gnomesRaw';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getGnomes());
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
