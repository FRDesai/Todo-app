import { useState } from 'react';
import './App.css';
import Content from './Content';


function App() {

  const getTasksFromLocalStorage = () => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ?  JSON.parse(storedTasks) : [];
  }
  const [tasks, setTasks] = useState(getTasksFromLocalStorage);
  
  const [isEditing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const addTask = (e) =>{
    e.preventDefault();
    let task = document.getElementById('task').value;
    if (task !== ''){
      const newTask = {
        id: Math.floor(Math.random()*1000),
        title: task,
        checked: false
      };
      const tasks = getTasksFromLocalStorage();
      tasks.push(newTask);
      localStorage.setItem('tasks' , JSON.stringify(tasks));
      
      setTasks(prevTasks => [...prevTasks, newTask]);
      document.getElementById('task').value = '';
    }
    else{
      alert('Please enter a task');
    }
  }

  const taskDeleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  const handleChange = (id) => {
    const changedTasks = tasks.map((task) => task.id === id ? {...task, checked: !task.checked} : task);
    setTasks(changedTasks);
    localStorage.setItem('tasks', JSON.stringify(changedTasks));
  }

  const EditTask = (id) => {
    const EditTask =  tasks.find(t => t.id === id);
    document.getElementById('task').value = EditTask.title;
    setEditing(true);
    setEditingId(id);
  }
 
  const changeTask = (id) => {
   const newValue = document.getElementById('task').value;
   const updatedTasks = tasks.map((task) => task.id === id? {...task, title: newValue} : task);
   setTasks(updatedTasks);
   document.getElementById('task').value = '';
   setEditing(false);
   localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  } 

  return (
    <div className="App">
      <Content 
        tasks={tasks}
        addTask={addTask}
        taskDeleted={taskDeleted}
        handleChange={handleChange}
        EditTask={EditTask} 
        isEditing={isEditing}
        changeTask={changeTask}
        editingId={editingId}
      />
      </div>
      );
}

export default App;
