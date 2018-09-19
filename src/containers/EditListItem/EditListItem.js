import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Card,
  Button,
  ButtonGroup,
  CardTitle,
  CardText,
  Col,
  Row,
  Form,
  Label,
  FormGroup,
  InputGroup,
  Input
} from 'reactstrap';
import { deleteItem, updateItem } from '../../store/actions/actions';

const styles = {
  card: {
    maxWidth: '355px',
    minWidth: '58%',
    margin: '0 auto',
    padding: '10px',
    marginBottom: '12px'
  },
  row: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    padding: '0px',
    margin: '0px',
  },
  element: {
    height: '100%',
    padding: '0px',
    paddingRight: '8px',
  }
}

class EditListItem extends Component {
  constructor(props) {
    super(props);
    const { indexKey } = this.props;
    this.state = {
      nombre: this.props.piezas[indexKey].nombre,
      cantidad: this.props.piezas[indexKey].cantidad,
      ancho: this.props.piezas[indexKey].ancho,
      alto: this.props.piezas[indexKey].alto,
      sentidoVeta: this.props.piezas[indexKey].sentidoVeta,
      edit: false,
      itemIndex: indexKey
    }
  }

  formValidator = () => {
    let { nombre, cantidad, ancho, alto, sentidoVeta } = this.state;
    let nombreValid = nombre === '' ? false : true;
    let cantidadValid = cantidad < 1 ? false : true;
    let anchoValid = ancho === 0 || ancho === '' || isNaN(ancho) ? false : true;
    let altoValid = alto === 0 || alto === '' || isNaN(alto) ? false : true;

    let isValid = nombreValid && cantidadValid && anchoValid && altoValid;

    if (isValid) {
      console.log('inside form validator true clause')
      return true;
    }
    console.log('inside form validator false clause')
    return false;
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.formValidator()) {
      this.props.updateItem({...this.state});
    } else {
      console.log('Please enter all fields');
    }
  };

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;

    this.setState({ [name]: target.value });
  };

  render() {
    const { nombre, cantidad, ancho, alto, sentidoVeta } = this.state;

    return (
      <Card body style={styles.card}>
        <Form onSubmit={this.handleSubmit}>
        <Row style={styles.row}>
          <Col style={styles.element} xs="4" sm="4">
            <CardTitle><h6>{nombre}</h6></CardTitle>
          </Col>

          <Col style={styles.element} xs="2" sm="2">
            <FormGroup>
             <Label>Cantidad</Label>
             <InputGroup>
             <Input
               type="number"
               bsSize="sm"
               name="cantidad"
               value={cantidad}
               onChange={this.handleInputChange}
             />
             </InputGroup>
            </FormGroup>
          </Col>

          <Col style={styles.element} xs="2" sm="2">
            <FormGroup>
              <Label>Ancho</Label>
              <InputGroup>
              <Input
                type="text"
                name="ancho"
                bsSize="sm"
                value={ancho}
                onChange={this.handleInputChange}
              />
              </InputGroup>
            </FormGroup>
          </Col>

          <Col style={styles.element} xs="2" sm="2">
            <FormGroup>
              <Label>Alto</Label>
              <InputGroup>
              <Input
                type="text"
                name="alto"
                value={alto}
                bsSize="sm"
                onChange={this.handleInputChange}
              />
             </InputGroup>
           </FormGroup>
          </Col>

          <Col style={styles.element} xs="2" sm="2">
            <FormGroup>
              <Label>Sentido de Veta</Label>
              <Input
                type="select"
                name="sentidoVeta"
                value={sentidoVeta}
                bsSize="sm"
                onChange={this.handleInputChange}
                >
                <option value="horizontal">Horizontal</option>
                <option value="vertical">Vertical</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>

        <Row style={styles.row}>
          <Button size="sm" style={{margin: '0 auto'}} type="submit">Guardar Cambios</Button>
        </Row>
        </Form>
      </Card>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateItem: (itemInfo) => dispatch(updateItem(itemInfo))
  };
};

const mapStateToProps = state => {
  return {
    piezas: state.piezas
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditListItem);
