const express = require('express');
const  route = express.Router();

route.use('/workers', require('./workersRouter'));

module.exports = route;