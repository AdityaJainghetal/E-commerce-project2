import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useSelector } from "react-redux";
import axios from "axios";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
const CheckOut = () => {
    const [mydata, setMydata] = useState({});
    const navigate = useNavigate();
    const Product = useSelector(state => state.mycart.cart);
    
    useEffect(() => {
        if (!localStorage.getItem("username")) {
            message.error("You are not logged in!");
            navigate("/cart");
        } else {
            loadData();
        }
    }, [navigate]);

    const loadData = async () => {
        const api = "https://e-commerce-project2-1.onrender.com/users/getuserdetail";
        try {
            const response = await axios.post(api, { id: localStorage.getItem("userid") });
            setMydata(response.data);
        } catch (error) {
            message.error("Failed to load user data.");
            console.error(error);
        }
    };

    const initPay = (data) => {
        const options = {
            key: "rzp_test_o3vkPO5n8pMXdo",
            amount: data.amount,
            currency: data.currency,
            name: productName,
            description: "Test",
            image: `https://e-commerce-project2-1.onrender.com/${myimg}`,
            order_id: data.id,
            handler: async (response) => {
                try {
                    const verifyURL = "https://e-commerce-project2-1.onrender.com/api/payment/verify";
                    await axios.post(verifyURL, response);
                    message.success("Payment successful!");
                } catch (error) {
                    // message.error("Payment verification failed.");
                    console.error(error);
                }
            },
            theme: {
                color: "#3399cc",
            },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    const handlePay = async () => {
        try {
            const orderURL = "https://e-commerce-project2-1.onrender.com/api/payment/orders";
            const { data } = await axios.post(orderURL, {
                amount: totalAmount,
                productname: productName,
                customername: mydata.name,
                address: mydata.address,
                email: mydata.email,
                id: mydata._id
            });
            initPay(data.data);
        } catch (error) {
            message.error("Failed to create payment order.");
            console.error(error);
        }
    };

    let totalAmount = 0;
    let productName = "";
    let myimg = "";

    Product.forEach((item) => {
        totalAmount += item.price * item.qnty;
        productName += item.name + ",";
        myimg = item.image;
    });

    return (
        <>
            
      
        <div id="checkout">
            <Card className="checkoutbtn">
                <Card.Img style={{width:"50%", height:"50%", padding:"auto"}} variant="top" src={`https://e-commerce-project2-1.onrender.com/${myimg}`} />
                <Card.Body>
                    <Card.Title>User CheckOut</Card.Title>
                    <Card.Text>
                        Your Total Pay Amount: {totalAmount}
                    </Card.Text>
                    <Card.Text>
                        Your Shipping Address: {mydata.address}
                    </Card.Text>
                    <Card.Text>
                        Your Products: {productName}
                    </Card.Text>
                    <Button variant="primary" onClick={handlePay}>Pay Now!</Button>
                </Card.Body>
            </Card>
        </div>
        </>
    );
};

export default CheckOut;