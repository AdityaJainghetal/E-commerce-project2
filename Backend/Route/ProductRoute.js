const express = require("express");
const route =express.Router();
const productController = require("../Controllers/ProductController");

route.get("/productdisplay", productController.productDisplay);

module.exports =route;