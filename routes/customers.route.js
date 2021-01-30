const customersRouter = require("express").Router();

const { viewAllProducts, productDetails, viewCategories, viewProducts, searchProducts, discounted, newProducts, freeDelivery, } = require('../controllers/main-controller')

// View all products
customersRouter.get("/products", viewAllProducts);

// View a specific product's details
customersRouter.get("/product/:id", productDetails);

// View all product categories
customersRouter.get("/categories", viewCategories);

// View products by category
customersRouter.get("/categories/:i", viewProducts);

// Search for products
customersRouter.get("/search/:i", searchProducts);

// View discounted products
customersRouter.get("/discounted", discounted);

// View latest products added
customersRouter.get("/newProducts/:i", newProducts);

// View freeDelivery products
customersRouter.get("/freeDelivery", freeDelivery);

module.exports = customersRouter;
