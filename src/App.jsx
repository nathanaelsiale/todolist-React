import { useState } from "react";
import TasksForm from "./components/taskform.jsx"
import TaskList from "./components/tasklist.jsx";


function App() {
  const [tasks, setTasks] = useState([]);

  const addTasks = (newTask) => {
  setTasks((prev) => [...prev, newTask]);
  };
  console.log(tasks);
  

  return <>
  <h2>TO-DO list</h2>
  <TasksForm addTasks={addTasks} />
  <TaskList tasks={tasks}></TaskList>

  </>
}


export default App
