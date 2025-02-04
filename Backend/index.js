const express = require("express");
const app= express();
const mongoose = require("mongoose")
const bodyparse = require("body-parser");
const adminRoute= require("./Route/AdminRoute");
const AllProductRoute = require("./Route/ProductRoute")
const cors = require("cors");
app.use(cors());
app.use("/uploads", express.static("uploads"));
mongoose.connect("mongodb://localhost:27017/Adityajain").then(()=>{
    console.log("DB connected !!!");
})

app.use(bodyparse.urlencoded({extended: true}))
app.use(bodyparse.json())
app.use("/admin",adminRoute)
app.use("/products", AllProductRoute);

app.listen(8000, function (error) {
    if (error) throw error
    console.log("Server created Successfully on PORT: ", 8000)
})