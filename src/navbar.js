import React from "react";
import {Link,NavLink} from "react-router-dom"

function Navbar(){
    return(
        <nav>
            <ul className="navbar">
                <li>
                    <NavLink style={({isActive})=>{return{color:isActive?'skyblue':''}}} className="navbar-link" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-link"to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-link" to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-link" to="/user">User</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;