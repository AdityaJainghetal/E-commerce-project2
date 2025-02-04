import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Col } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { FaCartShopping } from "react-icons/fa6";

const Topmenu = () => {
  const Product = useSelector(state=>state.mycart.cart);
  const productLength= Product.length;
  
  const [username, setUsername] = useState("");
  const [useremail, setUserEmail] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate()

  useEffect(()=>{
    setUsername(localStorage.getItem("username"));
    setUserEmail(localStorage.getItem("useremail"));
  },[])


  const userLogout=()=>{
    localStorage.removeItem("username");
    localStorage.removeItem("useremail");
    setIsLogin(true);
    navigate("/")
  }




  return (
    <>


    <Navbar  style={{backgroundColor:"darkblue", color:"white", fontSize:"20px"}}>
        <Container style={{color:"white"}}>
          <Navbar.Brand href="#home" style={{color:"red"}}>Dress collection</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="product" style={{color:"white"}} >All Product</Nav.Link>
            <Nav.Link as={Link} to="regsitation" style={{color:"white"}}>Sign Up</Nav.Link>
            <Nav.Link as={Link} to="login" style={{color:"white"}}>Login</Nav.Link>
          </Nav>
 
          <Nav.Link as={Link} to="/cart"><FaCartShopping /> {productLength}</Nav.Link>
       
        <Col>
     
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
          <p className='text-right' style={{padding:'0.5rem'}}></p>
       
        {isLogin ? (
          <>
          Please login your ID!!
          </>
        ): (
          <>
          Welcome to : {username} email: {useremail}

          <button onClick={userLogout}>Logout</button>
          </>
        )}
       
       
       
       
       
        </div>
        </Col>
        
     
        
        
        </Container>
        
      </Navbar>
    </>
  )
}

export default Topmenu