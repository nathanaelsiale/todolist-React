import TaskItem from "./taskitem.jsx";

function TaskList({ tasks, deleteTask, toggleTask }) {
  return (
    <ul style={{listStyle:"none", padding:0}}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;