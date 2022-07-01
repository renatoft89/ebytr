const connection = require('./connection');

const getAllModels = async () => {
  const query = 'select * from Ebytr.tasks'
  const [result] = await connection.query(query)

  console.log(result);

  return result;
}

module.exports = getAllModels;