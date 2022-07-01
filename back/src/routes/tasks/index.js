const express = require('express');

const tasksRouter = express.Router();

tasksRouter.get('/', () => console.log('xablau'));

module.exports = tasksRouter