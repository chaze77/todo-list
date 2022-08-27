import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Contact list</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/list">List</Nav.Link>
            <Nav.Link href="/add">Add</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      <br />
     
    </>
  );
}

export default Header;