import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllTask, deleteTask, addNewTask } from '../services/index'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

import '../styles/Tasks.css'

function Tasks() {
  const [tasks, setTasks] = useState([])
  const [statusTask, setStatusTask] = useState('Pendente');
  const [contentTask, setContentTask] = useState('');
  const [id, setId] = useState(0);

  const fetchAllTasks = (async() => {
    const allTasks = await getAllTask()
    setTasks(allTasks)

    if (allTasks.length > 0) {
      setId(allTasks.length)
    }
  })

  const handleSelect = ({ target }) => (setStatusTask(target.value))

  const createNewTask = (async () => {
    setId(id +1)
    setTasks([...tasks, {id, content: contentTask, status: statusTask}])
    addNewTask(id, contentTask, statusTask)
    setContentTask('')
  })

  const removeTask = (id) => {
    deleteTask(id)
    setTasks(tasks.filter(task => task.id !== id))
  }

  useEffect(() => {
    fetchAllTasks()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className='tasks'>
      <div className='container-task'>
        <div className='inputs'>
          <label htmlFor="input-task">
            New Task:
            <input
              id="task-input"
              type="text"
              value={contentTask}
              onChange={({ target }) => setContentTask(target.value)}
            />
          </label>
          <section className="status">
            Status:
            <select
              id="status-task"
              onChange={handleSelect}
            >
              <option value="pendente">Pendente</option>
              <option value="em andamento">Em andamento</option>
              <option value="pronto">Pronto</option>
            </select>
          </section>
          <button
            type="button"
            data-testid="button-filter"
            onClick={createNewTask}
          >
            Add New Task
          </button>
        </div>

        <section className='list'>
          <div className='list-tasks'>
            <ul>
              {
                tasks.map((task) => (
                  <li key={task.id}>
                    {task.content}
                    <span>
                      { task.status }                    
                    </span>
                    <FontAwesomeIcon
                      className='trash-icon' 
                      icon={ faTrashAlt }
                      onClick={() => removeTask(task.id)}
                   />
                   <FontAwesomeIcon 
                    icon={ faEdit }
                    className='edit-icon'
                    
                  />
                  </li>
                ))
              }
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Tasks;