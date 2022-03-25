
import { NavLink } from 'react-router-dom'


const style = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'darkgreen',
    textDecoration: 'none',
    color: 'white'
}
// creating the navbar

const NavBar = () => {
    return (
        <div>
            <NavLink
                activeStyle={{
                    fontweight: "bolder",
                    color: 'darkgrey'
                }}
                exact
                style={style}
                to="/">
                Home
            </NavLink>
            <NavLink
                activeStyle={{
                    fontWeight: "bolder",
                    color: "darkgrey"
                }}
                exact
                style={style}
                to="/todos/profile">
                Profile
            </NavLink>
            <NavLink
                activeStyle={{
                    fontWeight: "bolder",
                    color: "darkgrey"
                }}
                exact
                style={style}
                to="/todos/new">
                Create A Todo List
            </NavLink>
            <NavLink
                activeStyle={{
                    fontWeight: "bolder",
                    color: "darkgrey"
                }}
                exact
                style={style}
                to="/todos">
                Existing Todo Lists
            </NavLink>
        </div>
    )
    // putting in the links
}


export default NavBar