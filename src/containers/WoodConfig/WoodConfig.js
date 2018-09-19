import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleView, updateWood } from '../../store/actions/actions';
import {
  Jumbotron,
  Form,
  Input,
  Col,
  FormGroup,
  Label,
  InputGroup,
  InputGroupAddon,
  Button,
  Row,
  InputGroupText } from 'reactstrap';

const style = {
  formStyle: {
    margin: '0 auto',
    maxWidth: '300px',
    minWidth: '30%',
    alignItems:'center',
    flexDirection: 'column'
  },
  button: {
    margin: '0 auto'
  }
}


class WoodConfig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      espesor: this.props.madera.espesor,
      madera: this.props.madera.madera,
      desperdicio: this.props.madera.desperdicio
    }
  }

  desperdicio = madera => {
    switch(madera) {
      case 'Parota':
        return '10';
      case 'Cedro':
        return '15';
      case 'Nogal':
        return '8';
      case 'Mezquite':
        return '3';
      case 'Banak':
        return '9';
      case 'Alder':
        return '33';
      default:
        return '';
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let desperdicioValid = this.state.desperdicio > 100 || this.state.desperdicio < 1 ? false : true;

    if (desperdicioValid) {
      this.props.updateWood({...this.state});
      this.props.toggleView('inputView');
    }
  };

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const desperdicio = this.desperdicio(target.value);

    if (name === 'madera') {
      this.setState({ [name]: target.value, desperdicio });
    } else {
      this.setState({ [name]: target.value });;
    }
  };

  render() {
    return (
      <Jumbotron fluid style={{padding: 30}}>
          <Form style={style.formStyle} onSubmit={this.handleSubmit}>
            <FormGroup style={style.formElement}>
              <Label for="exampleSelect">Espesor:</Label>
              <Input
                type="select"
                name="espesor"
                value={this.state.espesor}
                onChange={this.handleInputChange}
                >
                <option value="1/4">1/4"</option>
                <option value="1/2">1/2"</option>
                <option value="3/4">3/4"</option>
                <option value="5/8">5/8"</option>
                <option value="1/8">1/8"</option>
                <option value="3/16">3/16"</option>
                <option value="5/16">5/16"</option>
                <option value="> 1">Otro > 1"</option>
                <option value="Entre 1 y 2">Otro entre 1" y 2"</option>
              </Input>
            </FormGroup>

            <Row>
              <Col>
                <FormGroup style={style.formElement}>
                  <Label for="exampleSelect">Madera:</Label>
                  <Input
                    type="select"
                    name="madera"
                    value={this.state.madera}
                    onChange={this.handleInputChange}
                    >
                    <option value="Parota">Parota</option>
                    <option value="Cedro">Cedro</option>
                    <option value="Nogal">Nogal</option>
                    <option value="Mezquite">Mezquite</option>
                    <option value="Banak">Banak</option>
                    <option value="Alder">Alder</option>
                    <option value="Otro">Otro</option>
                  </Input>
                </FormGroup>
              </Col>

              <Col>
                <FormGroup style={style.formElement}>
                  <Label>Desperdicio</Label>
                  <InputGroup>
                  <Input
                    type="number"
                    name="desperdicio"
                    placeholder="Porcentaje de desperdicio"
                    value={this.state.desperdicio}
                    onChange={this.handleInputChange}
                  />
                   <InputGroupAddon addonType="append">
                     <InputGroupText>%</InputGroupText>
                   </InputGroupAddon>
                  </InputGroup>
                 </FormGroup>
              </Col>
            </Row>

            <Row>
              <Button style={{margin: '0 auto'}} color="primary" type="submit">Guardar Cambios</Button>
            </Row>
          </Form>
      </Jumbotron>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    toggleView: (view) => dispatch(toggleView(view)),
    updateWood: (wood) => dispatch(updateWood(wood))
  };
};

const mapStateToProps = state => {
  return {
    madera: state.tipoMadera
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(WoodConfig);
