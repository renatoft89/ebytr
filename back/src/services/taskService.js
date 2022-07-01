const getAllModels = require('../models/taskModel');

const getAllService = async () => {
  const result = await getAllModels();

  return result;
}

module.exports = getAllService;