const express = require('express');
const userController = require('../src/controllers/userController');
const route = express.Router();

route.get('/', userController.index);

module.exports = route;