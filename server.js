const express = require('express');
const mongoose = require('mongoose');
const cors  = require('cors');

const app = express();
app.use(express.json())
app.use(cors())


let port = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost:27017/UserData", ()=> {
    console.log('DB connected')
});

const userSchema = new mongoose.Schema({
    name: String,
    email:String,
    password:String
  });
  const User = mongoose.model('User', userSchema);
  
  

app.post("/register", (req, res)=>{
    const { name, email, password} = req.body
    User.findOne({email:email}, (err, user) => {
        if(user){
            res.send({message: "User is Already Registered"})
        } else { 
        const user = new User ({
        name:name,
        email:email,
        password:password
    })
    
    user.save( err => {
        if(err) {
            res.send(err)
        } else {
            res.send({message:"Sucessfully Registerd"})
        }
})
        }
    })
})
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.listen(port, ()=>{
    console.log(`Server Started at ${port}`)
})




