function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    <li style={{display:"flex", alignItems:"center", marginBottom:"10px", gad:"10px"}}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />

      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          flexGrow:1
        }}
      >
        {task.text}
      </span>

      <button onClick={() => deleteTask(task.id)}
        style={{color:"red", border:"1px solid red", background:"none", cursor:"pointer"}}>
        supprimer
      </button>
    </li>
  );
}

export default TaskItem;