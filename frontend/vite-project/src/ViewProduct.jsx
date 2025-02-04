import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";

import { Container, Row, Col, Card, Button } from 'react-bootstrap'


const ViewProduct = () => {
    const {id} = useParams(); 
    const [proData ,setPreData] = useState({});
    const [bigImage, setBigImage]= useState("");
   
   
    const loadData = async()=>{
        let api="http://localhost:8000/products/productdatashow";
        const response = await axios.post(api, {id:id});
        setPreData(response.data);
        setBigImage(response.data.defaultImage)
        console.log(response.data);
    }


    useEffect(()=>{
        loadData()
    },[])


    const myBigImage=(item)=>{
        setBigImage(item)
        console.log(bigImage);
    }

    return (
    <>
   

     <Container style={{backgroundColor:"whitesmoke", border:"2px solid black", borderRadius:"10px", padding:"10px", textAlign:"center"}}>
       
       <Row className="justify-content-left">
           <Col  style={{display: 'flex', justifyContent: 'left'}}>
               <Card className="text-center justify-content-center m-3 " style={{ width: '20rem' }}>
    <Card.Img variant="top" src={`http://localhost:8000/${bigImage}`}  style={{height:'200px'}}/>
     
     <div style={{display:"flex", gap:"10px", marginTop:"10px"}}>
    {proData.images && proData.images.length > 0 ? (
           proData.images.map((item) => (
           <img style={{cursor:"pointer"}} onClick={()=>{myBigImage(item)}} src={`http://localhost:8000/${item}`} width="50" height="50" />
           ))
         ) : (
           <p>No additional images available.</p>
         )}

</div>
     </Card>
           </Col>
           <Col style={{paddingTop:"30px"}}>
          <h2> Product name : {proData.productname} </h2> 
          <h3 style={{color:'blue'}}> Price: {proData.productprice}</h3> 
          <h4> Category :    {proData.productcategory} </h4>
          <h5> Description : {proData.productdescription} </h5>
           <Button variant="primary">Add to Cart</Button>
           </Col>
       </Row>
</Container>
    
    
    
    
    
    
    
    </>
  )
}

export default ViewProduct
