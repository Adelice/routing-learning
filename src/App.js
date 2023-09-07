import React from "react";
import Navbar from "./navbar";
import { Routes,Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import './App.css'
import User from "./User";

function App() {
    return (
        <div>
            <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="user" element={<User/>}/>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />}/>
    </Routes>
        </div>
       
    )

}
export default App