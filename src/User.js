import { useParams } from "react-router-dom";

function User(){
    const {name} = useParams(); //get the URL parameters

    return(
        <div>
            <h1>This is the {name}  </h1>
        </div>
    )
}
export default User;