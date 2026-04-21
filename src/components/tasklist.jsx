function TaskList(tasks) {
    return(
        <ul>
            {tasks.map((tasks,index) => (
                <li key={index}>{tasks}</li>
            ))}
        </ul>
    )
}
export default TaskList