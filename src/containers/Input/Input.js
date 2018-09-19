import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../store/actions/actions';
import {
  Jumbotron,
  Form,
  FormGroup,
  Label,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  Button,
  Col,
  FormFeedback,
  Row
} from 'reactstrap';


class ItemInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: 'Pieza ' + (this.props.piezas.length + 1),
      cantidad: 1,
      ancho: '',
      alto: '',
      sentidoVeta: 'horizontal'
    };
  }

  formValidator = () => {
    let { nombre, cantidad, ancho, alto } = this.state;
    let nombreValid = nombre === '' ? false : true;
    let cantidadValid = cantidad < 1 ? false : true;
    let anchoValid = ancho === 0 || ancho === '' || isNaN(ancho) ? false : true;
    let altoValid = alto === 0 || alto === '' || isNaN(alto) ? false : true;
    let isValid = nombreValid && cantidadValid && anchoValid && altoValid ? true : false;

    return isValid;
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.formValidator()) {
      this.props.onSubmit({...this.state});

      let numPiezas = this.props.piezas.length + 2;

      this.setState({
        nombre: 'Pieza ' + numPiezas,
        cantidad: 1,
        ancho: '',
        alto: '',
        sentidoVeta: 'horizontal'
      });
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
    return (
      <Jumbotron fluid style={{padding: 30}}>
          <Form style={{maxWidth: '400px', minWidth: '60%', margin: '0 auto'}} onSubmit={this.handleSubmit}>

                <Row>
                  <Col>
                    <FormGroup>
                      <Label>Ancho</Label>
                      <InputGroup>
                      <Input
                        type="text"
                        name="ancho"
                        value={this.state.ancho}
                        onChange={this.handleInputChange}
                      />
                       <InputGroupAddon addonType="append">
                         <InputGroupText>"</InputGroupText>
                       </InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Col>

                  <Col>
                    <FormGroup>
                      <Label>Alto</Label>
                      <InputGroup>
                      <Input
                        type="text"
                        name="alto"
                        value={this.state.alto}
                        onChange={this.handleInputChange}
                      />
                       <InputGroupAddon addonType="append">
                         <InputGroupText>"</InputGroupText>
                       </InputGroupAddon>
                     </InputGroup>
                  </FormGroup>
                  </Col>
                </Row>



                <Row>
                 <Col>
                   <FormGroup>
                     <Label>Sentido de Veta</Label>
                     <Input
                       type="select"
                       name="sentidoVeta"
                       value={this.state.sentidoVeta}
                       onChange={this.handleInputChange}
                       >
                       <option value="horizontal">Horizontal</option>
                       <option value="vertical">Vertical</option>
                     </Input>
                   </FormGroup>
                </Col>

                <Col>
                  <FormGroup>
                   <Label>Cantidad de piezas</Label>
                   <InputGroup>
                   <Input
                     type="number"
                     name="cantidad"
                     value={this.state.cantidad}
                     onChange={this.handleInputChange}
                   />
                   </InputGroup>
                  </FormGroup>
                </Col>

                <Col>
                  <FormGroup>
                   <Label>Nombre de pieza</Label>
                   <InputGroup>
                   <Input
                     type="text"
                     name="nombre"
                     value={this.state.nombre}
                     onChange={this.handleInputChange}
                   />
                   </InputGroup>
                 </FormGroup>
                </Col>
              </Row>

              <Row>
                <Button color="primary" style={{margin: '0 auto'}} type="submit">Agregar Pieza</Button>
              </Row>
          </Form>
      </Jumbotron>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (itemInfo) => dispatch(addItem(itemInfo))
  };
};

const mapStateToProps = state => {
  return {
    piezas: state.piezas
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemInput);
