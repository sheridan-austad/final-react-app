import {useHistory} from "react-router-dom";
import { useState } from "react";
import TodoCard from "./TodoCard";
import TodoList from "./TodoList";

const UserProfile = () => {
  const [newUser, setNewUser] = useState({username:"", email: ""});
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
  const history = useHistory();

  const handleSubmitNewUser = (e) => {
    e.preventDefault(console.log("create new user"))

    fetch(`http://127.0.0.1:9393/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(newUser)
    })
      .then(resp => resp.json())
      .then(newUser => history.push("/todos/new"))
  }
  console.log(newUser)

  const handleSubmitExisting = (e) => {
    e.preventDefault(console.log("get todo for existing user"))
  
    fetch(`http://127.0.0.1:9393/users/by_name/${userName}`)
      .then(resp => resp.json())
      .then(user => {
        setUser(user)
        setUserName("")
      })
  }

  const handleExistingUserChange = (e) => {
    setUserName(e.target.value)
  }

  const handleChange = (e) => {
    setNewUser({...newUser, [e.target.name]:e.target.value})
  }

  return (

    <div>

      <h4>User Profile</h4>
      <p>Below you can either find todo lists for an existing username,</p>
      <p>or you can create a new username to begin making a new todo list</p>

      <form id="NewUserSubmit" onSubmit={handleSubmitNewUser}>
        <label htmlFor="username">Create New Username: &nbsp;</label>
        <input type="text" onChange={handleChange} value={newUser.username} name="username" required /><br />
        <label htmlFor="email">Email: &nbsp;</label>
        <input type="text" onChange={handleChange} value={newUser.email} name="email" required /><br />
        <input type="submit" value="Create New Username" />
      </form>

      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;

      <form id="ExistingUserSearch" onSubmit={handleSubmitExisting}>
        <label htmlFor="username">Username: &nbsp;</label>
        <input type="text" onChange={handleExistingUserChange} value={userName} name="username" required /><br />
        <input type="submit" value="Find Todo lists for this user" />
      </form>

      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      {user ? user.todos?.map(todo => <TodoCard todo={todo}/>) : <p>There is no user!</p>}
    </div>
  )
}

export default UserProfile