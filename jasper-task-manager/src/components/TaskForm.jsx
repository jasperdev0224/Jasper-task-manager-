import { useState } from 'react'
function TaskForm({addTask}){
   const[task, setTask] = useState ('');

  
  return(
    <div>
      <input type="text"  placeholder="Enter Task"
value={task}
onChange={(e) => setTask(e.target.value)} 
  />
      <button onClick={() => {addTask(task);
      setTask('');
      }}
        >Add Task
        </button>
    </div>
  );
}
export default TaskForm;  