import { useState } from 'react';
import './App.css';
import TaskList from  './components/TaskList'; 
import TaskForm from './components/TaskForm';


function App () {
  const[tasks, setTasks] = useState([]);
  
  const addTask = (newTask) => {
    setTasks([...tasks,{id: Date.now (), text:newTask,
      completed: false
  }]);
  };

   const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task)=> task !== taskToDelete));
   };

   const toggleTask = (taskToToggle) => {
    setTasks(
      tasks.map((task)  => 
      task === taskToToggle
      ? {...task, completed: ! task.completed}
      : task
      )
    );
   };

  return(
    <div className='app-container'>
      <h1> Jasper Task Manager </h1>
      <TaskForm addTask={addTask}/>
      <TaskList tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleTask}
      />
    </div>  
  );
}

export default App;  







 