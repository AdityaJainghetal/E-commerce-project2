const express = require("express");
const route =express.Router();
const productController = require("../Controllers/ProductController");

route.get("/productdisplay", productController.productDisplay);
route.post("/productdatashow", productController.productDataShow);
route.post("/displaydata", productController.AllDisplay);



module.exports =route;