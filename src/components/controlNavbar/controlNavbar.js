import React from "react";
import "./controlNavbar.scss"
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const ControlNavbar = () => {

  return <Navbar bg="light" expand="lg" className="customNavbar">
  <Container>
    <Link to="/">
      <Navbar.Brand className="thekedarFont customBrandTxt">Thekedar</Navbar.Brand>
    </Link>    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">

        <Link id="link-a" to="a" className="navItem">
          MachineA
        </Link>

        <Link id="link-b" to="b" className="navItem">
          MachineB
        </Link>

        <Link id="link-manage" to="manage" className="navItem">
          Manage Machines
        </Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
}

export default ControlNavbar