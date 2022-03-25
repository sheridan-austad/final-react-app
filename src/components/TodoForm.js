import { useState } from "react"
import { useHistory } from "react-router-dom"


const TodoForm = () => {
    const [todo, setTodo] = useState({
        username: "",
        name: "",
        task: "",
        completed: false
    });

    const history = useHistory()

    const handleChange = (e) => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        })
    }

    const handleCheckboxChange = (e) => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.checked
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if ([todo.username, todo.name, todo.task].some(val => val.trim() === "")) {
            alert("You must fill in all the information please!")
        }

        fetch(`http://127.0.0.1:9393/todos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(todo)
        })
            .then(() => history.push("/todos"))
            .catch(() => alert("Invalid Username, please go to Profile to create a new one"))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h4>Create a new Todo List</h4>
                &nbsp;
                &nbsp;
                <label htmlFor="username">User Name:</label>
                &nbsp;
                &nbsp;
                <input onChange={handleChange} type="text" name="username" value={todo.username} required /><br />

                <label htmlFor="name">Type ("chore", "task", etc.): &nbsp;</label>
                <input onChange={handleChange} type="text" name="name" value={todo.name} required /><br />
                &nbsp;
                &nbsp;
                <label htmlFor="task">Task: &nbsp;</label>
                <input onChange={handleChange} type="text" name="task" value={todo.task} required /><br />
                &nbsp;
                &nbsp;
                <label htmlFor="completed">Completed: </label>
                &nbsp;
                &nbsp;
                <input onChange={handleCheckboxChange} type="checkbox" name="completed" value={todo.completed} /><br />
                <input type="submit" value="Create Todo List" />
            </form>
        </>
    )
}
export default TodoForm