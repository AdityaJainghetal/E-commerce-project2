// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Col } from 'react-bootstrap';
// import { useSelector } from 'react-redux';
// import { FaCartShopping } from "react-icons/fa6";

// const Topmenu = () => {
//   const Product = useSelector(state => state.mycart.cart);
//   const productLength = Product.length;

//   const [username, setUsername] = useState("");
//   const [useremail, setUserEmail] = useState("");
//   const [isLogin, setIsLogin] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setUsername(localStorage.getItem("username"));
//     setUserEmail(localStorage.getItem("useremail"));
//   }, []);

//   const userLogout = () => {
//     localStorage.removeItem("username");
//     localStorage.removeItem("useremail");
//     setIsLogin(true);
//     navigate("/");
//   };

//   return (
//     <Navbar expand="lg" style={{ backgroundColor: "#003366", color: "white", fontSize: "18px" }}>
//       <Container>
//         <Navbar.Brand href="#home" style={{ color: "white", fontWeight: "bold" }}>Dress Collection</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" bg="primary" style={{backgroundColor:"yellow" ,color:"white"}} />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link as={Link} to="product" style={{ color: "white", transition: "color 0.3s" }} onMouseEnter={e => e.target.style.color = "#FFCC00"} onMouseLeave={e => e.target.style.color = "white"}>All Products</Nav.Link>
//             <Nav.Link as={Link} to="registration" style={{ color: "white", transition: "color 0.3s" }} onMouseEnter={e => e.target.style.color = "#FFCC00"} onMouseLeave={e => e.target.style.color = "white"}>Sign Up</Nav.Link>
//             <Nav.Link as={Link} to="login" style={{ color: "white", transition: "color 0.3s" }} onMouseEnter={e => e.target.style.color = "#FFCC00"} onMouseLeave={e => e.target.style.color = "white"}>Login</Nav.Link>
//           </Nav>
//           <Col className="d-flex align-items-center justify-content-end">
//             <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
//               {isLogin ? (
//                 <p style={{ color: "#FFCC00" }}>Please login your ID!!</p>
//               ) : (
//                 <div style={{ display: "flex", alignItems: "center" }}>
//                   <span className="me-3" style={{ color: "white" }}>Welcome: {username} | Email: {useremail}</span>
//                   <button onClick={userLogout} style={{ backgroundColor: "#FFCC00", borderRadius: "10px", border: "none", padding: "5px 10px", cursor: "pointer", transition: "background-color 0.3s" }} onMouseEnter={e => e.target.style.backgroundColor = "#FFD700"} onMouseLeave={e => e.target.style.backgroundColor = "#FFCC00"}>Logout</button>
//                 </div>
//               )}
//             </div>
//             <Nav.Link as={Link} to="/cart" className="d-flex align-items-center" style={{ color: "white" }}>
//               <FaCartShopping /> <span className="ms-1">{productLength}</span>
//             </Nav.Link>
//           </Col>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Topmenu;






import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import {
  Container,
  Nav,
  Navbar,
  Row,
  Col,
  Button,
  Badge,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";

const Topmenu = () => {
  const Product = useSelector((state) => state.mycart.cart);
  const productLength = Product.length;

  const [username, setUsername] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);
    setIsLogin(!!storedUsername);
  }, []);

  const userLogout = () => {
    localStorage.removeItem("username");
    setIsLogin(false);
    navigate("/");
  };

  return (
    <>
      <Navbar expand="lg" className="custom-navbar" id="navbar">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="navbar-brand">
            Dress Collection
          </Navbar.Brand>
          <Navbar.Toggle >
          <IoMdMenu />
          </Navbar.Toggle>
        
          
           
          
          <Navbar.Collapse id="navbar-nav">
            <Row className="w-100 align-items-center">
              {/* Left Section */}
              <Col xs={12} md={4} className="text-center text-md-start">
                <Nav className="nav-links">
                  <Nav.Link as={Link} to="/product">
                    All Products
                  </Nav.Link>
                  <Nav.Link as={Link} to="/registration">
                    Sign Up
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login" className="login-link">
                    Login
                  </Nav.Link>
                </Nav>
              </Col>

              {/* Center Section */}
              <Col xs={12} md={4} className="text-center user-info">
                {isLogin ? (
                  <p className="welcome-text">
                    Welcome : <strong>{username}</strong>
                  </p>
                ) : (
                  <p>Please login to access your account</p>
                )}
              </Col>

              {/* Right Section */}
              <Col
                xs={12}
                md={4}
                className="text-center text-md-end d-flex justify-content-center justify-content-md-end align-items-center"
              >
                <Nav.Link as={Link} to="/cart" className="cart-icon">
                  <FaCartShopping />
                  {productLength > 0 && (
                    <Badge bg="danger">{productLength}</Badge>
                  )}
                </Nav.Link>
                {isLogin && (
                  <Button onClick={userLogout} className="logout-btn">
                    Logout
                  </Button>
                )}
              </Col>
            </Row>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Topmenu;