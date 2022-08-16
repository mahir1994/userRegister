import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';      
import './Login.css';   
import axios from "axios";


function Login(setLoginUser){

   const navigate = useNavigate();

   const [user, setUser] = useState({
      email:"",
      password:""
   });

   function handleChange(e){
      const{name, value} = e.target
      setUser({ ...user, [name]:value})
   };

      const login = () => {
         axios.post("http://localhost:5000/login", user)
         .then(res => {
             alert(res.data.message)
             navigate("/")
         })
     }

    return(
       <div className='login' >
          <h1>Login</h1>
            <input type="text" placeholder="Email" name="email" value={user.email} onChange={handleChange}/>
            <input type="text" placeholder="Password" name="password" value={user.password} onChange={handleChange}/>
            <button className="button" onClick={login}  >Login</button>
            <div>or</div>
            <div className="button" onClick={()=>navigate("/register")}>Register</div>
       </div>

    )
}

export default Login;