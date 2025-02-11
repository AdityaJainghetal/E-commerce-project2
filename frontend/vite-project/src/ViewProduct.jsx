import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


const ViewProduct = () => {
    const { id } = useParams(); 
    const [proData, setPreData] = useState({});
    const [bigImage, setBigImage] = useState("");

    const loadData = async () => {
        let api = "https://e-commerce-project2-1.onrender.com/products/productdatashow";
        const response = await axios.post(api, { id: id });
        setPreData(response.data);
        setBigImage(response.data.defaultImage);
        console.log(response.data);
    }

    useEffect(() => {
        loadData();
    }, []);

    const myBigImage = (item) => {
        setBigImage(item);
    }

    return (
        <>
            <Container className="product-container">
                <Row className="justify-content-center">
                    <Col md={6} className="image-column">
                        <Card className="text-center m-3">
                            <Card.Img variant="top" src={`https://e-commerce-project2-1.onrender.com/${bigImage}`} className="main-image" />
                            <div className="thumbnail-container">
                                {proData.images && proData.images.length > 0 ? (
                                    proData.images.map((item, index) => (
                                        <img 
                                            key={index} 
                                            className="thumbnail" 
                                            onClick={() => { myBigImage(item) }} 
                                            src={`https://e-commerce-project2-1.onrender.com/${item}`} 
                                            alt={`Thumbnail ${index}`} 
                                        />
                                    ))
                                ) : (
                                    <p>No additional images available.</p>
                                )}
                            </div>
                        </Card>
                    </Col>
                    <Col md={6} className="details-column">
                        <h2 className="product-name">Product Name: {proData.productname}</h2>
                        <h3 className="product-price">Price: ${proData.productprice}</h3>
                        <h4 className="product-category">Category: {proData.productcategory}</h4>
                        <h5 className="product-description">Description: {proData.productdescription}</h5>
                        <Button variant="primary" className="add-to-cart-button">Add to Cart</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ViewProduct;