const connection = require('./connection');

const getAllModels = async () => {
  const query = 'select * from Ebytr.tasks'
  const [result] = await connection.query(query)

  console.log(result);

  return result;
}

const createTaskModel = async (task, status) => {
  const query = `INSERT INTO Ebytr.tasks (content, status)
  VALUES (?, ?)`;

  const [result] = await connection.query(query, [task, status]);

  return result.insertId;
}

module.exports = {
  getAllModels,
  createTaskModel };