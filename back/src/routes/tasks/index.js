const express = require('express');
const taskController = require('../../controllers/taskController');

const tasksRouter = express.Router();

tasksRouter.get('/', taskController.getAllTasks);

module.exports = tasksRouter