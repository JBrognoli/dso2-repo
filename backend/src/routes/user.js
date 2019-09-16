const express = require("express");
const UserController = require("../controllers/UserController");

const routes = express.Router();

// User Methods

routes.post("/", UserController.create);
routes.get('/', UserController.readAll);
routes.get('/:id', UserController.readById);
routes.put('/:id', UserController.update);
routes.delete('/:id', UserController.deleteById)

module.exports = routes;