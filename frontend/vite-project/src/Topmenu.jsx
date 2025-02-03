import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Topmenu = () => {
  return (
    <>


    <Navbar  style={{backgroundColor:"darkblue", color:"white", fontSize:"20px"}}>
        <Container style={{color:"white"}}>
          <Navbar.Brand href="#home" style={{color:"red"}}>Dress collection</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="product" style={{color:"white"}} >All Product</Nav.Link>
            <Nav.Link as={Link} to="mens" style={{color:"white"}}>Mens</Nav.Link>
            <Nav.Link as={Link} to="women" style={{color:"white"}}>Womens</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Topmenu