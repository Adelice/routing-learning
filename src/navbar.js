import React from "react";
import {NavLink} from "react-router-dom"

function Navbar(){
    return(
        <nav>
            <ul className="navbar">
                <li>
                    <NavLink style={({isActive})=>{return{color:isActive?"skyblue":''}}} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink  style={({isActive})=>{return{color:isActive?"skyblue":''}}}to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink style={({isActive})=>{return{color:isActive?"skyblue":''}}} to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink style={({isActive})=>{return{color:isActive?"skyblue":''}}} to="user">User</NavLink>
                </li>
                <li>
                    <NavLink style={({isActive})=>{return{color:isActive?"skyblue":''}}} to="products">Products</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;
