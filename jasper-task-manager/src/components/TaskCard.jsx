function TaskCard ({task, onDelete, onToggle}) {
  return (
  <div className="task-card">
    <p className="task-text"
      style={{
        textDecoration: 
        task.completed ? "line-through" :"none"
      }}
      >
      {task.text}
      </p>

      <button className="complete-btn" onClick={() =>
         onToggle(task)}>
         {task.completed  ? "Undo" :
       "Complete"}
      </button> 

    <button className="delete-btn" style={{ backgroundColor:"#e53935",
     color: "white"}}
    onClick={() => onDelete(task)}>
      Delete</button>
    </div>
   );
}

export default TaskCard;  
