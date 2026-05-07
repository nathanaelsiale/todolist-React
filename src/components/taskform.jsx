
import { useState } from "react"

function TasksForm ({addTasks}) {
    const [input, setInput] = useState("")

     
    const onSubmit = (e) =>{
        e.preventDefault()
        if (input.trim() === "") return
        addTasks(input)
        setInput("")
    }


    return <>
    <form onSubmit={onSubmit} style={{marginBottom:"20px"}}>
        <input 
        id="todo"
        type="text"
        name="input"
        value={input}
        placeholder="ajouter une tâche..."
        onChange={(e) => setInput(e.target.value)} style={{padding:"8px", width:"70%"}}></input>

        <button
        type="submit" style={{padding:"8px ml-2"}}> Ajouter </button>
    </form>
    </>
}
export default TasksForm