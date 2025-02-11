// const express = require("express");
// const app= express();
// const mongoose = require("mongoose")
// const bodyparse = require("body-parser");
// const adminRoute= require("./Route/AdminRoute");
// const AllProductRoute = require("./Route/ProductRoute")
// const userRoute =  require("./Route/userRoute")
// const paymentRoute= require("./Route/payment")
// const cors = require("cors");
// app.use(cors());
// require('dotenv').config();



// app.use("/uploads", express.static("uploads"));
// mongoose.connect(process.env.DConnected).then(()=>{
    
//     console.log("DB connected !!!");
// })

// app.use(bodyparse.urlencoded({extended: true}))
// app.use(bodyparse.json())
// app.use("/admin",adminRoute)
// app.use("/products", AllProductRoute);
// app.use("/users", userRoute)
// app.use("/api/payment",paymentRoute)



// app.listen(8000, function (error) {
//     if (error) throw error
//     console.log("Server created Successfully on PORT: ", 8000)
// })





const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const adminRoute = require("./Route/AdminRoute");
const allProductRoute = require("./Route/ProductRoute");
const userRoute = require("./Route/userRoute");
const paymentRoute = require("./Route/payment");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Database Connection
mongoose.connect(process.env.DConnected)
    .then(() => {
        console.log("DB connected successfully!");
    })
    .catch(err => {
        console.error("DB connection error:", err);
    });

// Routes
app.use("/admin", adminRoute);
app.use("/products", allProductRoute);
app.use("/users", userRoute);
app.use("/api/payment", paymentRoute);

// Start Server
const PORT = process.env.PORT || 8000; // Use environment variable for port
app.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`Server created successfully on PORT: ${PORT}`);
});