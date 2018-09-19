import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { toggleView, getResult } from '../../store/actions/actions';


class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  getResultHandler = () => {
    this.props.toggleView('resultView');
    this.props.getResult();
  }

  render() {
    return (
        <Navbar color="light" light expand="md">
          <NavbarBrand style={{height: '100%', paddingTop: '17px'}}><h4>Calculadora de Madera</h4></NavbarBrand>
          <Collapse isOpen={false} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem style={{paddingRight: '22px', paddingTop: '2px'}}>
                <NavLink onClick={() => this.props.toggleView('woodConfigView')}>Editar Madera</NavLink>
              </NavItem>

              <NavItem>
                <Button onClick={this.getResultHandler} color="primary" size="lg">Calcular</Button>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleView: (view) => dispatch(toggleView(view)),
    getResult: () => dispatch(getResult())
  };
};

export default connect(null, mapDispatchToProps)(NavBar);
