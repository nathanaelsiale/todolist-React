function TaskList({tasks}) {
   console.log(tasks);
   return (
         <ul>
            {tasks.map((todo,index) => (<li key={index}>{todo}</li>))}
         </ul>
   )
   
}
export default TaskList