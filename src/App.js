import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import Control from './containers/Control/Control';
import ListItem from './containers/ListItem/ListItem';
import ItemsView from './components/ItemsView/ItemsView'

class App extends Component {

  render() {
    return (
      <div>
        <Control display={this.props.display} />
        <ItemsView />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    piezas: state.piezas,
    display: state.display
  }
};

export default connect(mapStateToProps, null)(App);
