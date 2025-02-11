


import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import img7 from "./assets/img7.jpg";
import img9 from "./assets/img9.jpg";
import { useNavigate } from 'react-router-dom';


const Banner = () => {
  const navigate = useNavigate();

  const handleInput = () => {
    navigate("/mens");
  };

  const handleInput2 = () => {
    navigate("/womens");
  };


  const kids = () => {
    navigate("/kids");
  };

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src={img1} alt="First slide" className="d-block w-100" style={{ height: "500px" }} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={img2} alt="Second slide" className="d-block w-100" style={{ height: "500px" }} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={img3} alt="Third slide" className="d-block w-100" style={{ height: "500px" }} />
        </Carousel.Item>
      </Carousel>

      <Container style={{ backgroundColor: "lightblue", padding: "20px" }}>
        <Row className="text-center">
          <Col xs={6} md={3}>
            <Image src={img4} roundedCircle style={{ height: "230px", width: "50%", cursor: "pointer", transition: "transform 0.2s" }} onClick={handleInput} className="hover-effect" />
            <h3>Mens</h3>
          </Col>
          <Col xs={6} md={3}>
            <Image src={img5} roundedCircle style={{ height: "230px", width: "50%", cursor: "pointer", transition: "transform 0.2s" }} onClick={kids} className="hover-effect" />
            <h3>Kids</h3>
          </Col>
          <Col xs={6} md={3}>
            <Image src={img7} roundedCircle style={{ height: "230px", width: "50%", cursor: "pointer", transition: "transform 0.2s" }} onClick={handleInput2} className="hover-effect" />
            <h3>Womens</h3>
          </Col>
          <Col xs={6} md={3}>
            <Image src={img9} roundedCircle style={{ height: "230px", width: "50%" }} />
            <h3>Mobiles</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Banner;