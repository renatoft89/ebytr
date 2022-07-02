import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllTask, deleteTask } from '../services/index'
import '../styles/Tasks.css'

function Tasks() {
  const [tasks, setTasks] = useState([])

  const allTask = async () => {
    const allTasks = await getAllTask()
    setTasks(allTasks);
  }

  useEffect(() => {
   allTask();
  }, [])

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