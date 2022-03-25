
import { Link } from "react-router-dom"

const TodoCard = ({ todo }) => {

  const itemDeletedEvent = new Event("ItemDeleted")

  console.log("Making Card");
  console.log(todo);

  function deleteTodo() {
    console.log(`Deleting Item ${todo.id}`);
    fetch(`http://127.0.0.1:9393/todos/${todo.id}`, {
      method: 'delete'
    })
    const deleteButton = document.querySelector(`#deleteBtn${todo.id}`)
    deleteButton.textContent = "DELETING...";
    deleteButton.classList.add('activeDelete')
    document.dispatchEvent(itemDeletedEvent)
  }
  
  return (
    (<div className="card">
      <p>Username:  
        <Link to={`/todos/profile`}>{todo.user.username}</Link>
      </p>
      <p>Type of task: {todo.name}</p>
      <p>Task: {todo.task}</p>
      <p>Completed: {todo.completed ? "true" : "false"} </p>
      <button id={`deleteBtn${todo.id}`} onClick={deleteTodo}>DELETE</button>
    </div>)

  )
}

export default TodoCard