import { useState, useEffect } from "react";
import TasksForm from "./components/taskform.jsx"
import TaskList from "./components/tasklist.jsx";



function App() {
  const [tasks, setTasks] = useState(() => {
    const saveTasks = localStorage.getItem("tasks")
      return saveTasks ? JSON.parse(saveTasks) : []
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks])

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
  
  const clearAll = () =>{
    if (window.confirm("voulez-vous vraiment supprimer toutes les tâches ?")){
      setTasks([])
    }
  }
  
  const totalTasks = tasks.length
  const remainingTasks = tasks.filter((t) => ! t.completed).length 
  

  return (
  <div style={{
    padding:"20px",
    maxWidth:"500px",
    margin:"40px auto",
    fontFamily:"Arial, sans-serif",
    border:"1px solid #ddd",
    borderRadius:"8px",
    boxShadow:"0 2px 10px rgba(0,0,0,0.1)"
  }}>
  <h2 style={{textAlign:"center", color:"#333"}}>TO-DO List</h2>
  <TasksForm addTasks={addTask} />
    <div style={{
      margin:"20px 0",
      padding:"10px 0",
      borderTop: "1px solid #eee",
      borderBottom:"1px solid #eee"
    }}>
    {totalTasks > 0 ? (
      <div style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
      }}>
        <p style={{margin:0, fontSize:"14px", color:"#666"}}>
          Tâche restante:<strong style={{color:"#000"}}>{remainingTasks}</strong> / {totalTasks}
        </p>
        <button onClick={clearAll}
        style={{
          backgroundColor:"#ff4d4d",
          color:"white",
          border:"none",
          padding:"6px 12px",
          cursor:"pointer",
          fontSize:"12px",
          fontWidth:"bold"
        }}>Tout supprimer</button>
      </div>
    ) : (
      <p style={{margin:0, textAlign:"center", color:"#999", fontStyle:"italic"}}>
        Aucune tâche pour le moment
      </p>
    )

    }
    </div>
  <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask}></TaskList>
  </div>
)
}
export default App
