const { getAllService, createTaskService } = require('../services/taskService');

const getAllTasks = async (req, res, next) => {
  try {
    const result =  await getAllService();

    return res.status(200).json(result)
  } catch (error) {
    console.log(error);
    next(error);
  }
}

const createTask = async (req, res, next) => {
  try {
    const { task, status } = req.body
    const result = await createTaskService(task, status);

    return res.status(201).json(result)
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = { getAllTasks, createTask };