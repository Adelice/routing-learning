import React from "react";
import Navbar from "./navbar";
import { Routes,Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import './App.css'
import User from "./User";
import Products from "./Products";
import FeaturedProducts from "./FeaturedProducts";
import NewProducts from "./NewProducts";
import OrderSummary from "./OrderSummary";
//self closing tag on routes 
function App() {
    return (
        <div>
            <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="user/:name" element={<User/>}/>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />}/>
      <Route path="products" element={<Products/>}>
        <Route path="featured" element={<FeaturedProducts/>}/>
        <Route path="new" element={<NewProducts/>}/>
      </Route>
     <Route path="order-summary" element ={<OrderSummary/>}/>
    </Routes>
        </div>
       
    )

}
export default App