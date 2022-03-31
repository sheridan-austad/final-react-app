
import { Link, useHistory } from "react-router-dom"

const TodoCard = ({ todo }) => {

  const history = useHistory()

  const itemDeletedEvent = new Event("ItemDeleted")

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

  const handleComplete = (e) => {
    fetch(`http://127.0.0.1:9393/todos/${todo.id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({completed: !todo.completed})
  })
      .then(() => history.push("/todos/profile"))
      .catch(() => alert("todo cannot be updated"))
}
  

  return (
    (<div className="card">
      <p>Username:  
        <Link to={`/todos/profile`}>{todo.user.username}</Link>
      </p>
      <p>Type of task: {todo.name}</p>
      <p>Task: {todo.task}</p>
      <p>Completed: {String(todo.completed)} </p>
      <button onClick={handleComplete}>{todo.completed ? "Completed" : "Please Complete"}</button>
      <button id={`deleteBtn${todo.id}`} onClick={deleteTodo}>DELETE</button>
    </div>)

  )
}

export default TodoCard