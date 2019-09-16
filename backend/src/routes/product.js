const express = require("express");
const ProductController = require("../controllers/ProductController");

const routes = express.Router();

// Product Methods

routes.post('/:id', ProductController.create);
routes.get('/', ProductController.readAll);
routes.get('/:id', ProductController.readById);
routes.put('/:id', ProductController.update);
routes.delete('/:id', ProductController.deleteById);

routes.post('/buy/:id', ProductController.buy);


module.exports = routes;