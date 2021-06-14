import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";
import "./home.css";

class header extends Component {
  render() {
    return (
      <Navbar className='p-4' bg='dark' variant='dark'>
        <Navbar.Brand>
          <p>
            <span className='primary-text'>Otel</span>
            <span className='second-text'>Reservasyon sistemi</span>
          </p>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Button onClick={this.props.handleNewReserveClick}>
            Yeni Reservasyon Yap
          </Button>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default header;
