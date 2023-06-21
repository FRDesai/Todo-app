import React from 'react';
import Header from './Header';
import './content.css'
import Button from './Button';
import List from './List';

const Content = ({tasks, addTask, taskDeleted, handleChange, EditTask, isEditing, changeTask, editingId }) => {

  return (
    <>
        <Header/>
        <div className='container'>
        
        <div className="input">
          <input type="text" 
              placeholder='Enter the task'
              id='task'>
          </input>

          <Button 
           
            addTask={addTask}
            changeTask={changeTask}
            isEditing={isEditing}
            editingId={editingId}
          />
        </div>
        
        </div>
        
        <div className='body'>
           <List 
            tasks={tasks}
            taskDeleted={taskDeleted}
            handleChange={handleChange}
            addTask={addTask}
            EditTask={EditTask}
           />
        </div>
    </>
  )
}

export default Content