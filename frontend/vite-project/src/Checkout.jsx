import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useSelector } from "react-redux";
import axios from "axios";
import { Button } from "react-bootstrap";
const CheckOut=()=>{
     const [mydata, setMydata]= useState({});
    const navigate= useNavigate();
    const Product=useSelector(state=>state.mycart.cart);
    console.log(Product);
    useEffect(()=>{
        if(!localStorage.getItem("username"))
        {
         message.error("You are not Loged in !")
            navigate("/cart")
        }
        loadData();
    }, [])

  const loadData=async()=>{
    let api="http://localhost:8000/users/getuserdetail";
    try {
         const response= await axios.post(api, {id:localStorage.getItem("userid")});
         setMydata(response.data);
         console.log(response.data);
    } catch (error) {
         console.log(error);
    }
  }

const initPay = (data) => {
  const options = {
    key : "rzp_test_o3vkPO5n8pMXdo",
    amount: data.amount,
    currency: data.currency,
    name: productName,
    description: "Test",
    image: `http://localhost:8000/${myimg}`,
    order_id: data.id,
    handler: async (response) => {
      try {
        const verifyURL = "https://localhost:8000/api/payment/verify";
        const {data} = await axios.post(verifyURL,response);
      } catch(error) {
        console.log(error);
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
    const orderURL = "http://localhost:8000/api/payment/orders";
    const {data} = await axios.post(orderURL,{amount: totalAmount, productname:productName, customername:mydata.name, address:mydata.address, email:mydata.email, id:mydata._id});
    console.log(data);
    initPay(data.data);
  } catch (error) {
    console.log(error);
  }
};








    
    
let totalAmount=0;
let productName="";
let myimg="";
const ans=Product.map((key)=>{
        totalAmount+=key.price*key.qnty;
        productName+=key.name+",";
        myimg=key.image;
        
    })


    return(
        <>
          <h1 align="center"> User CheckOut</h1>

         <h2 align="center">Your Total Pay Amount : {totalAmount} </h2>
         <h4 align="center"> Your Shipping Address :{mydata.address} </h4>
         <h4 align="center"> Your Products : {productName} </h4>
         <br /> <br />
 
    <center>
    <Button variant="primary" onClick={handlePay}> Pay Now!</Button>
    </center>
        
        <br/> <br/>




        </>
    )
}

export default CheckOut;