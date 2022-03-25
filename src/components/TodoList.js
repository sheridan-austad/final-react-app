import TodoCard from "./TodoCard"
import {useState, useEffect} from "react"

const TodoList = () => {
    const [todoList, setTodoList] = useState([]);
    const [userList] = useState(null);
    
    useEffect(() => {
        refresh()
    }, []);


    function refresh(){
        fetch(`http://127.0.0.1:9393/todos`)
             .then(resp => resp.json())
             .then(todos => setTodoList(todos))
    }

    document.addEventListener('ItemDeleted', refresh)

    return (
        <div>
            {todoList.map(todo => <TodoCard key={todo.id} todo={todo} users={userList}/>)}
        </div>
    )
}

export default TodoList