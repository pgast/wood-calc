import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleView } from '../../store/actions/actions';
import { Jumbotron, Button, Row, Col, Badge } from 'reactstrap';

const styles = {
  container: {
    maxWidth: '400px',
    minWidth: '60%',
    margin: '0 auto',
    height: '350px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  resultTitle: {
    fontSize: '7em',
    textAlign: 'center'
  },
  resultContainer: {
    marginTop: '2em',
  },
  resultDescription: {
    textAlign: 'center',
    fontSize: '2em',
  },
  errorContainer: {
    textAlign: 'center',
    fontSize: '2em',
    margin: 'auto',
  },
}

class Result extends Component {
  renderView() {
    if (this.props.numDePiezas === 0) {
      return (
        <div style={styles.container}>
          <div style={styles.errorContainer}>
            <h1>No hay piezas para calcular</h1>
          </div>

          <Row>
            <Button color="success" onClick={() => this.props.toggleView('inputView')}>Agregar piezas</Button>
          </Row>
        </div>
      )

    } else {

      return (
        <div style={styles.container}>
          <div style={styles.resultContainer}>
            <h1 style={styles.resultTitle}>{this.props.result} {this.props.result > 1 ? "pies" : "pie"}</h1>
            <h6 style={styles.resultDescription}>de madera {this.props.tipoMadera.madera}</h6>
          </div>

          <hr />

          <Row style={{marginBottom: '1em'}}>
            <Col><h6>Para {this.props.numDePiezas} piezas de {this.props.tipoMadera.espesor} de espesor</h6></Col>
          </Row>

          <Row>
            <Button onClick={() => this.props.toggleView('inputView')}>Seguir calculando</Button>
          </Row>
        </div>
      )
    }
  }

  render() {
    return (
      //   <p>Espesor de madera a pedir: 1" (dinamic output)</p>
      //   <p>Desperdicio: {this.props.tipoMadera.desperdicio}</p>

      <Jumbotron fluid style={{padding: '30px'}}>
        {this.renderView()}
      </Jumbotron>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleView: (view) => dispatch(toggleView(view)),
  };
};

const mapStateToProps = state => {
  return {
    result: state.result,
    tipoMadera: state.tipoMadera,
    numDePiezas: state.numDePiezas,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
