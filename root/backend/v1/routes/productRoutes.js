const express = require("express");
const router = express.Router();
const productController = require("../../controllers/productController");

router
    .get("/items?q=:query", productController.getAllProducts)
    .get("/items/:id", productController.getProductById);

module.exports = router;