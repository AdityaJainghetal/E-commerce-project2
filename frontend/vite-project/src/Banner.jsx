import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from "./assets/img1.jpg"
import img2 from "./assets/img2.jpg"
import img3 from "./assets/img3.jpg"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import img4 from "./assets/img4.jpg"
import img5 from "./assets/img5.jpg"
import img7 from "./assets/img7.jpg"
import img9 from "./assets/img9.jpg"
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate=  useNavigate()

  const handleInput=()=>{
      navigate("/mens")
  }


  const handleInput2=()=>{
    navigate("/womens")
}



  return (
    <>
     <Carousel>
      <Carousel.Item>
      <img src={img1} width="100%" height="500px"/>
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} width="100%" height="500px"/>
        <Carousel.Caption>
     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} width="100%" height="500px"/>
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    
    <div style={{width:"100%"}}>
    <Container style={{backgroundColor:"lightblue",width:"100%" }}>
      <Row style={{display:"flex"}}>
        <Col xs={6} md={3}>
          <Image src={img4} roundedCircle  style={{height:"230px", width:"50%", cursor:"pointer"}} onClick={handleInput}  />
 
          <h3>Mens</h3>
        </Col>
        <Col xs={6} md={3}>
          <Image src={img5} roundedCircle style={{height:"230px", width:"50%"}} />
          <h3>Kids</h3>
        </Col>
        <Col xs={6} md={3}>
          <Image src={img7} roundedCircle  style={{height:"230px", width:"50%", cursor:"pointer"}} onClick={handleInput2} />
          <h3>Womens</h3>
        </Col>
        <Col xs={6} md={3}>
          <Image src={img9} roundedCircle  style={{height:"230px", width:"50%"}}  />
          <h3>Mobiles</h3>
        </Col>
      </Row>
    </Container>
    </div>
    
    
    </>
  )
}

export default Banner