import { Link,Outlet,useNavigate } from "react-router-dom";
import './Products.css'
function Products(){
   
    return(
        <div>
            <h1>This is the Products page</h1>

            <nav>
                <Link to="featured">Featured</Link>
                <Link to="new">New</Link>
            </nav>
           
            <Outlet/>
        </div>
    )
}
export default Products;
