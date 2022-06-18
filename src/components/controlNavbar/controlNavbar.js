import React, { useEffect, useState } from "react";
import "./controlNavbar.scss"
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const ControlNavbar = () => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState("")

  // Set active nav useeffect
  useEffect(() => {
    setActiveNav(location.pathname)
  }, [location])

  return <Navbar bg="light" expand="lg" className="customNavbar">
  <Container>
    <Link to="/">
      <Navbar.Brand className="thekedarFont customBrandTxt">Thekedar</Navbar.Brand>
    </Link>    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">

        <Link id="link-a" to="a" className={activeNav == "/a" ? "navItem activeClass" : "navItem"}>
          MachineA
        </Link>

        <Link id="link-b" to="b" className={activeNav == "/b" ? "navItem activeClass" : "navItem"}>
          MachineB
        </Link>

        <Link id="link-manage" to="manage" className={activeNav == "/manage" ? "navItem activeClass" : "navItem"}>
          Manage Machines
        </Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
}

export default ControlNavbar