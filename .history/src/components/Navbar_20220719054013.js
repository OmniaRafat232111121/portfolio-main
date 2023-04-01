import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";


import {
  Router
} from "react-router-dom";

export const NavBar = () => {


  return (
   
      <Navbar expand="md" >
        <Container>
          <Navbar.Brand href="/">
            <img src={''} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" >Home</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects" >Projects</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
   
  )
}