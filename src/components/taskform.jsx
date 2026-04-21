
import { useState } from "react"

function TasksForm (addTasks) {
    const [input, setInput] = useState("")
    const keepTasks = () =>{
        addTasks((prev) =>[...prev,input])
    }
     console.log(keepTasks);
     
    const onSubmit = (e) =>{
        e.preventDefault()
    }
    
    return <>
    <form onSubmit={onSubmit}>
        <input 
        id="todo"
        type="text"
        name="input"
        value={input}
        placeholder="ajouter une tâche..."
        onChange={(e) => setInput(e.target.value)}></input>

        <button
        type="submit"
        onClick={keepTasks}> Ajouter </button>
    </form>
    </>
}
export default TasksForm