import React from 'react';
import { Card, Button, ButtonGroup, CardTitle, CardText, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { deleteItem, editItem } from '../../store/actions/actions';
import EditListItem from '../EditListItem/EditListItem';


const styles = {
  card: {
    maxWidth: '355px',
    minWidth: '58%',
    margin: '0 auto',
    padding: '10px',
    paddingRight: '0px',
    paddingLeft: '0px',
    marginBottom: '12px'
  },
  row: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: '14px',
    padding: '0px',
    margin: '0px'
  }
}

const ListItem = ({
  indexKey,
  piezas,
  stopEditing,
  deleteItemHandler,
  nombrePieza,
  cantidad,
  ancho,
  alto,
  sentidoVeta,
  editItem }) => {

  const listItem = (
    <Card body style={styles.card}>
      <Row style={styles.row}>
        <Col xs="2" sm="2">
          <CardTitle><h6>{nombrePieza}</h6></CardTitle>
        </Col>

        <Col xs="2" sm="2">
          <CardText>Cantidad: {cantidad}</CardText>
        </Col>

        <Col xs="2" sm="2">
          <CardText>Ancho: {ancho}"</CardText>
        </Col>

        <Col xs="2" sm="2">
          <CardText>Alto: {alto}"</CardText>
        </Col>

        <Col xs="2" sm="2">
          <CardText>Veta: {sentidoVeta}</CardText>
        </Col>

        <Col xs="2" sm="2">
          <ButtonGroup size="sm">
            <Button onClick={() => editItem(indexKey)}>Editar</Button>
            <Button onClick={() => deleteItemHandler(indexKey)}>X</Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Card>
  )

    return (
      <div>
        {piezas[indexKey].edit ? <EditListItem indexKey={indexKey}/> : listItem}
      </div>
    )
}

const mapDispatchToProps = dispatch => {
  return {
    deleteItemHandler: (itemIndex) => dispatch(deleteItem(itemIndex)),
    editItem: (itemIndex) => dispatch(editItem(itemIndex)),
  };
};

const mapStateToProps = state => {
  return {
    piezas: state.piezas
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
