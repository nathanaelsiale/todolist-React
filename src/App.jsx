import { useState } from "react";
import TasksForm from "./components/taskform.jsx"
import TaskList from "./components/tasklist.jsx";


function App() {
  const [tasks, setTasks] = useState([]);

   const addTask = (text) => {
      const newTask = {
      id: Date.now(),
      text: text,
      completed: false
      };
     setTasks((prev) => [...prev, newTask]);
    };
  console.log(tasks);
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };
  
  

  return <>
  <h2>TO-DO list</h2>
  <TasksForm addTasks={addTask} />
  <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask}></TaskList>

  </>
}


export default App
