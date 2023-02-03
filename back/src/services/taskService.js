const {
  getAllModels, createTaskModel, editTaskModel, deleteTaskModel,
} = require('../models/taskModel');

const getAllService = async () => {
  const result = await getAllModels();

  return result;
};

const createTaskService = async (id, task, status) => {
  const createTask = await createTaskModel(id, task, status);

  return createTask;
};

const editTaskService = async (id, task, status) => {
  const editTask = await editTaskModel(id, task, status);

  return editTask;
};

const deleteTaskService = async (id) => {
  const deleteTask = await deleteTaskModel(id);

  return deleteTask;
};

module.exports = {
  getAllService,
  createTaskService,
  editTaskService,
  deleteTaskService,
};
