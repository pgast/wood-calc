import React from 'react';
import { connect } from 'react-redux';
import ListItem from '../../containers/ListItem/ListItem';
import { Card, Button, CardTitle, CardText, Col, Row } from 'reactstrap';

const styles = {
  card: {
    maxWidth: '355px',
    minWidth: '58%',
    margin: '0 auto',
    padding: '10px',
    paddingRight: '0px',
    paddingLeft: '0px',
    paddingBottom: '30px',
    marginBottom: '12px',
    backgroundColor: '#ffffff',
    height: '88px'
  },
  row: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: '14px',
    paddingTop: '30px',
    margin: '0px',
    textAlign: 'center'
  }
}


const ItemsView = ({ display, piezas }) => {

  const emptyListBanner = (
    <Card style={styles.card}>
      <Row style={styles.row}>
        <Col>
          <CardTitle>
            <h5>No hay piezas para calcular</h5>
          </CardTitle>
        </Col>
      </Row>
    </Card>
  )

  return (
    <div>
      {display !== 'resultView' && piezas.length > 0 ? piezas.map((pieza, index) => {
          return (
            <ListItem
              key={index}
              indexKey={index}
              nombrePieza={pieza.nombre}
              cantidad={pieza.cantidad}
              ancho={pieza.ancho}
              alto={pieza.alto}
              sentidoVeta={pieza.sentidoVeta}
            />
          )
      }
    ) : null}

      {display !== 'resultView' && piezas.length === 0 ? emptyListBanner : null}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    piezas: state.piezas,
    display: state.display
  }
}

export default connect(mapStateToProps)(ItemsView);
