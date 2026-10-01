import TaskCard from './TaskCard';
 function TaskList( {tasks, onDelete, onToggle}) {
  return (
    <div>
      {tasks.map((task)=> (
        <TaskCard key={task.id}
         task={task} 
         onDelete={onDelete}
          onToggle={onToggle}/>
      ))}
    </div>
  );
 }

 export default TaskList;

