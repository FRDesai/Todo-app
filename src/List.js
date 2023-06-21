import { React, useEffect, useState } from 'react'
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import './list.css'



const List = ( {tasks, taskDeleted, handleChange, EditTask}) => {

  const [taskss, setTasks] = useState([]);

  useEffect(() =>{
    const storedTasks = localStorage.getItem('tasks');
    const tasks = storedTasks ? JSON.parse(storedTasks) : [];
    setTasks(tasks);
  }, [taskss]);
  return (
    <div>
       <ul>
            {taskss?.map((task, index) =>
              <li key={index} className='row'>
                <input 
                  type="checkbox"
                  id="task"
                  checked={task.checked}
                  onChange={() => handleChange(task.id)}
                  style = { {cursor: 'pointer'}}
                />
                <label style = {(task.checked) ? {textDecoration: 'line-through'} : null}>{task.title}</label>

                <div className='Buttons'>
                  <FaTrashAlt
                   className='delete'
                    role="button" 
                    tabIndex="0"
                    style= {{cursor: 'pointer'}}
                    onClick={() => taskDeleted(index)}
                  />

                  <FaEdit
                    role="button" 
                    
                    style= {{cursor: 'pointer'}}
                    onClick = {() => EditTask(task.id)}
                  />
                </div>
              </li>
          )}
      </ul>
    </div>
  )
}

export default List
