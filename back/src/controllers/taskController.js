const getAllService = require('../services/taskService');

const getAllTasks = async (req, res, next) => {
  try {
    const result =  await getAllService();

    return res.status(200).json(result)
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = { getAllTasks };