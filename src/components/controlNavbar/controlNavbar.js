import React, { useEffect, useState } from "react";
import "./controlNavbar.scss"
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ControlNavbar = () => {
  const location = useLocation();
  const categories = useSelector(state => state.categoryReducer)
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

        { // Create nav links from category redux array.
          categories.map(item => {
            return <Link key={"NavLink" + item.id} to={item.typeName} className={activeNav == `/${item.typeName}` ? "navItem activeClass" : "navItem"}>
              {item.typeName}
            </Link>
          })
        }

        <Link id="link-manage" to="manage" className={activeNav == "/manage" ? "navItem activeClass" : "navItem"}>
          Manage Machines
        </Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
}

export default ControlNavbar