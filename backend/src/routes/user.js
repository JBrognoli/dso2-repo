const express = require("express");
const UserController = require("../controllers/UserController");

const routes = express.Router();

routes.post("/", UserController.create);
routes.get('/', UserController.readAll);
routes.get('/:id', UserController.readById);

module.exports = routes;