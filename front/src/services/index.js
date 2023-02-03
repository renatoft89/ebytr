import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3002",
});

const getAllTask = async () => {
  const result = await api.get("/tasks").then((response) => 
    (response.data))
    try {
    return await result;
  } catch (err) {
    console.error("ops! ocorreu um erro" + err);
  }
};


const deleteTask = (id) => {
  api.delete(`/tasks/${id}`).then((response) => (response))
  .catch((err) => {
    console.error("ops! ocorreu um erro" + err);
  });
}

const addNewTask = (id, contentTask, statusTask) => {
  api.post('/tasks', { id, task: contentTask, status: statusTask })
  .then((response) => (response))
  .catch((err) => {
    console.error("ops! ocorreu um erro" + err);
  });
}

export { 
  getAllTask,
  deleteTask,
  addNewTask
};