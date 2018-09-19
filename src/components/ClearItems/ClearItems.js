import React from 'react';
import { connect } from 'react-redux';
import { clearList } from '../../store/actions/actions';
import { Button } from 'reactstrap';

const styles = {
  container: {
    zIndex: '-33',
    width: '100%',
    border: '1px solid black',
    margin: '0px'
  }
}

const ClearItems = ({ clearList }) => {
  return (
    <div style={styles.container}>
      <Button onClick={() => clearList()}>Borrar piezas</Button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    clearList: () => dispatch(clearList())
  };
};

export default connect(null, mapDispatchToProps)(ClearItems);
