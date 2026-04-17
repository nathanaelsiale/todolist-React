
import { useState } from "react"

function TasksForm () {
    const [form, setForm] = useState({
        task:"",
        description:"",
        date: new Date().toLocaleDateString()
        });

    const handleSubmit = (e) =>{
        e.preventDefault();
    } 
    
    return <>
    <form onSubmit={handleSubmit}>
        <input 
        type="text"
        name="task"
        value={form.task}
        onChange={(e) =>{ setForm({...form, task:e.target.value})}}></input>

        <textarea
        type="textarea"
        name="description"
        value={form.description}
        onChange={(e) =>{setForm({...form, description:e.target.value})}}></textarea>

        <input
        type="date"
        name="date"
        value={form.date}
        onChange={(e) =>{setForm({...form, date:e.target.value})}}>
        </input>
        <button type="submit">Ajouter</button>

    </form>
    </>
}
export default TasksForm