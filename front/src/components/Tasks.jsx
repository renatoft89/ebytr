import React from 'react';
import { useEffect } from 'react';
import api from '../services/index'
import '../styles/Tasks.css'

function Tasks() {
  useEffect(() => {
    api
      .get("/tasks").then((response) => (console.log(response)))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  return (
    <div className='tasks'>
      <p>Tasks</p>
    </div>
  );
}

export default Tasks;