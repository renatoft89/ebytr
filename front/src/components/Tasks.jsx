import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllTask, deleteTask, addNewTask } from '../services/index'

import '../styles/Tasks.css'

function Tasks() {
  const [tasks, setTasks] = useState([])
  const [statusTask, setStatusTask] = useState('Pendente');
  const [contentTask, setContentTask] = useState('');

  const allTask = async () => {
    const allTasks = await getAllTask()
    setTasks(allTasks);
  }

  const handleSelect = ({ target }) => (setStatusTask(target.value))

  const createNewTask = () => {
    addNewTask(contentTask, statusTask)
    allTask();
    setContentTask('')
  }

  const removeTask = (id) => {
    deleteTask(id)
    allTask();
  }

  useEffect(() => {
   allTask();
  }, [])

  return (
    <div className='tasks'>
      <label htmlFor="input-task">
        New Task: 
        <input
          id="task-input"
          type="text"
          value={ contentTask }
          onChange={ ({ target }) => setContentTask(target.value) }
        />
      </label>
      <section className="status">
        Status:
        <select
          id="status-task"
          onChange={ handleSelect }
        >
          <option value="pendente">Pendente</option>
          <option value="em andamento">Em andamento</option>
          <option value="pronto">Pronto</option>
        </select>
      </section>
      <button
          type="button"
          data-testid="button-filter"
          onClick={ createNewTask }
        >
          Add New Task
        </button>
       <ul>
        {
          tasks.map((task) => (
            <li key={ task.id }>
              { task.content }
              <button
                type='button'
                onClick={ () => removeTask(task.id) }
              >X</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Tasks;