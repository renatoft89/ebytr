import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { api, deleteTask } from '../services/index'
import '../styles/Tasks.css'

function Tasks() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    api
      .get("/tasks").then((response) => (setTasks(response.data)))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  });
  return (
    <div className='tasks'>
       <ul>
        {
          tasks.map((task) => (
            <li key={ task.id }>
              { task.content }
              <button
                type='button'
                onClick={ () => deleteTask(task.id) }
              >X</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Tasks;