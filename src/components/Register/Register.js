import React, {useState}  from 'react';
import './Register.css';
import { useNavigate } from "react-router-dom"
import axios from 'axios'

function Register () {
   const navigate = useNavigate()
   const [user, setUser] = useState({
      name:"",
      email:"",
      password:"",
      confirmPassword:""
   });

   function handleChange(e){
      const {name, value} = e.target
      setUser({
         ...user, [name]:value
      })};
      

      function register() {
         const {name, email, password, confirmPassword} = user
         console.log(user)
         if(name && email && password && (password === confirmPassword)){
            axios.post("http://localhost:5000/register", user)
            .then(res => {
               alert(res.data.message)
               navigate("/login")
            })
            
         } else {
            alert("invalid input")
         }
      };

   
    return(
       <div className='register'>
          <h1>Register</h1>
            <input type="text" placeholder="Full Name" name="name" value={user.name}  onChange={handleChange}/>
            <input type="text" placeholder="Email" name="email" value={user.email} onChange={handleChange}/>
            <input type="text" placeholder="Password" name="password" value={user.password} onChange={handleChange}/>
            <input type="text" placeholder="confirm Password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange}/>
            <button className="button" onClick={register} >Register</button>
            <div>or</div>
            <button className="button" onClick={() => navigate("/login")}>Login</button>
       </div>

    )
};

export default Register;