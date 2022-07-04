const { getAllModels, createTaskModel, editTaskModel, deleteTaskModel } = require('../models/taskModel');

const getAllService = async () => {
  const result = await getAllModels();

  return result;
}

const createTaskService = async (task, status) => {
  console.log({task, status});
  const createTask = await createTaskModel(task, status)

  return createTask;
}

const editTaskService = async (id, task, status) => {
  const editTask = await editTaskModel(id, task, status);

  return editTask;
}

const deleteTaskService = async (id) => {
  const deleteTask = await deleteTaskModel(id);

  return deleteTask;
}

module.exports = { 
  getAllService,
  createTaskService,
  editTaskService,
  deleteTaskService
};