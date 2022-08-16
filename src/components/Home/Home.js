import React from 'react';
import { useNavigate } from 'react-router';
import "./Home.css"

function Home(){
   const navigate = useNavigate();
    return(
       <div className="homepage">
          <h1>Home</h1>
          <button className='button' onClick={() => navigate("/login")}>Logout</button>
       </div>
    )
}

export default Home;