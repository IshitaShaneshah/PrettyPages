import React, { useState } from 'react'
import axios from 'axios';
import "../CSS/Register.css"
const Register = () => {
  const [user,setUser]=useState({
    email:"",
    password:"",
    repassword:""
  });
  const onChangeHandler=(event)=>{
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }
  const submitHandler=(event)=>{
    event.preventDefault();
    if(user.email && user.password && user.repassword===user.password){
      axios.post("http://localhost:3100/api/v2/signup",{
        email: user.email,
        password: user.password
      }).then(console.log(user))
    }
    else{
      alert("Invalid Credentials")
    }
  }
  return (
    <div className='register-background'>
    <div className='register'>
        <div className='register-title'>Register</div>
     <form onSubmit={submitHandler}>
        <div className='input-fields'>
        <label for="email">Email :</label>
        <br/>
        <input id="email" type="email" value={user.email} name="email" onChange={onChangeHandler} required/>
        </div>
        <div className='input-fields'>
        <label for="password">Password :</label>
        <br/>
        <input id="password" type="password" name="password" value={user.password} onChange={onChangeHandler} required/>
        </div>
        <div className='input-fields'>
        <label for="re-password">Re-Enter Password :</label>
        <br/>
        <input id="re-password" type="password" name="repassword" value={user.repassword} onChange={onChangeHandler} required/>
        </div>
        <div className='register-btn'>
        <button type="submit" class="btn btn-light" >Register</button>
        </div>
     </form>
     <div className='login-reg'>Already have an account? <a href="/">Login</a></div>
    </div>
    </div>
  )
}
export default Register





