const express = require('express');
const taskController = require('../../controllers/taskController');

const tasksRouter = express.Router();

tasksRouter.get('/', taskController.getAllTasks);
tasksRouter.post('/', taskController.createTask);
tasksRouter.delete('/:id', taskController.deleteTask);

module.exports = tasksRouter