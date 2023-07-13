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
  return (
    <div className='register-background'>
    <div className='register'>
        <div className='register-title'>Login</div>
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
        <div className='register-btn'>
        <button type="submit" class="btn btn-light">Login</button>
        </div>
     </form>
     <div className='login-reg'>Don't have an account? <a href="/">Register</a></div>
    </div>
    </div>
  )
}
export default Login;