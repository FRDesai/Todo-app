import React from 'react'

const Button = ({addTask, changeTask, isEditing, editingId}) => {
  return (
    <div>
      {isEditing ? (
      <button  
      className="button-33"
      type="button"
      onClick = {() => changeTask(editingId)}
      >Edit</button>
    ) : (
      <button
      type="button"
      className="button-33"
      onClick={addTask} 
      >Add</button>
    )}
    </div>
    
  )
}

export default Button
