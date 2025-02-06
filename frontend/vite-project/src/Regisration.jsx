import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup=()=>{
    const [input, setInput] = useState({});
    const navigate = useNavigate()

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
        
    }

  


    const handleSubmit=async(e)=>{
      e.preventDefault();
      try {
      
        let api="http://localhost:8000/users/userregister";
      const response= await axios.post(api, input);
      console.log(response.data);
      alert("Data save!!!");
      navigate("/login")
      } catch (error) {
          console.log(error);
      }
      
    }
    return(
        <>
        <div style={{width:"500px", margin:"auto",display:"flex", flexDirection:"column"}}>
          <h1>Registration</h1>
          <Form style={{width:"500px", textAlign:"center",border:"2px solid black", fontWeight:"700",fontSize:"20px",padding:"20px", borderRadius:"10px", backgroundColor:"whitesmoke"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter name: </Form.Label>
        <Form.Control type="text" name="name" value={input.name} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Contact no: </Form.Label>
        <Form.Control type="number" name="contactno" value={input.contactno} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter your city: </Form.Label>
        <Form.Control type="text" name="city" value={input.city} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Shipping Address: </Form.Label>
        <Form.Control type="text" name="address" value={input.address} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Pin code: </Form.Label>
        <Form.Control type="number" name="pincode" value={input.pincode} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter your Email: </Form.Label>
        <Form.Control type="email" name="email" value={input.email} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={input.password} onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    <br/> <br/>
    </div>
        </>
    )
}

export default Signup;