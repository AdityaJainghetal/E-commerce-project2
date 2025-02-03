import { Container, Row, Button } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';

function DisplayProduct() {
  const [products, setProducts] = useState([]);

  const loadData = async () => {
    try {
      let api = "http://localhost:8000/products/productdisplay";
      const response = await axios.get(api);
      console.log(response.data)

      if (response.data && response.data.length > 0) {
        setProducts(response.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  const proAns = products.map((item) => (
    <>
    
    {console.log(item.defaultImage)} 


<Card style={{ width: '18rem' }}>
      <Card.Img variant="top"
    
        src={`http://localhost:8000/${item.defaultImage}`}
        style={{ height: "200px" }}/>
   
      <Card.Body>
        <Card.Title>{item.productname}</Card.Title>
        <Card.Text>
        {item.productprice}
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
    </>
  ));

  return (
    <>
      <div className="display-cards-page">
        <Container>
          <h2 className="text-center my-4 section-title">
            Our Exclusive Products
          </h2>
          <Row>
            <div className="product">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="title">
                      <h2>
                        our <strong className="black">products</strong>
                      </h2>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-bg">
              <div className="product-bg-white">
                <div className="container">
                  <div className="row">{proAns}</div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default DisplayProduct;