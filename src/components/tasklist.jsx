import TaskItem from "./taskitem.jsx";

function TaskList({ tasks, deleteTask, toggleTask }) {
  return (
    <ul>
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