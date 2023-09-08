import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home(){
     const navigate = useNavigate()
    return (
        <div>
            <h1>This is the Homepage</h1>
            <button onClick={()=>navigate('order-summary')}>Place Order</button>
        </div>
    )
}
export default Home