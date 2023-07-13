<<<<<<< HEAD
import React,{useState} from 'react'
import "../CSS/Register.css"
const Login = () => {
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
    if(user.email && user.password){
     console.log("hogaya")
    }
    else{
      alert("Invalid Credentials")
    }

  }
=======
import React from 'react'
import "../CSS/Register.css"
const Login = () => {
>>>>>>> origin/main
  return (
    <div className='register-background'>
    <div className='register'>
        <div className='register-title'>Login</div>
<<<<<<< HEAD
     <form onSubmit={submitHandler}>
        <div className='input-fields'>
        <label for="email">Email :</label>
        <br/>
        <input id="email" type="email" value={user.email} name="email" onChange={onChangeHandler} required/>
=======
     <form>
        <div className='input-fields'>
        <label for="email">Email :</label>
        <br/>
        <input id="email" type="text"/>
>>>>>>> origin/main
        </div>
        <div className='input-fields'>
        <label for="password">Password :</label>
        <br/>
<<<<<<< HEAD
        <input id="password" type="password" name="password" value={user.password} onChange={onChangeHandler} required/>
        </div>
        <div className='register-btn'>
        <button type="submit" class="btn btn-light">Login</button>
        </div>
     </form>
     <div className='login-reg'>Don't have an account? <a href="/">Register</a></div>
=======
        <input id="password" type="password"/>
        </div>
        <div className='register-btn'>
        <button type="button" class="btn btn-light">Login</button>
        </div>
     </form>
     <div className='login-reg'>Don't have an account? <a href="#">Register</a></div>
>>>>>>> origin/main
    </div>
    </div>
  )
}
export default Login;