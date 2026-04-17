function TasksItem({task, onDelete, onToggle}) {
    return(
        <li>
            <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}></input>

            <span style={{textDecoration: task.completed ? "line-through" : "none"}}>
                {task.text}
            </span>

            <button onClick={() => onDelete(task.id)}>🗑️</button>
        </li>
    )
}
export default TasksItem
