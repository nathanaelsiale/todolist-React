
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
    <form onSubmit={onSubmit}>
        <input 
        id="todo"
        type="text"
        name="input"
        value={input}
        placeholder="ajouter une tâche..."
        onChange={(e) => setInput(e.target.value)}></input>

        <button
        type="submit"> Ajouter </button>
    </form>
    </>
}
export default TasksForm