const { getAllModels, createTaskModel } = require('../models/taskModel');

const getAllService = async () => {
  const result = await getAllModels();

  return result;
}

const createTaskService = async (task, status) => {
  console.log({task, status});
  const createTask = await createTaskModel(task, status)

  return createTask;
}

module.exports = { 
  getAllService,
  createTaskService };