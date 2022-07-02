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

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params

    const result = await deleteTaskService(id)

    return res.status(204).json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = { 
  getAllTasks,
  createTask,
  deleteTask
};