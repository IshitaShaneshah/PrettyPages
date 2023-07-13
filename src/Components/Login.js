import React from 'react'
import "../CSS/Register.css"
const Login = () => {
  return (
    <div className='register-background'>
    <div className='register'>
        <div className='register-title'>Login</div>
     <form>
        <div className='input-fields'>
        <label for="email">Email :</label>
        <br/>
        <input id="email" type="text"/>
        </div>
        <div className='input-fields'>
        <label for="password">Password :</label>
        <br/>
        <input id="password" type="password"/>
        </div>
        <div className='register-btn'>
        <button type="button" class="btn btn-light">Login</button>
        </div>
     </form>
     <div className='login-reg'>Don't have an account? <a href="/">Register</a></div>
    </div>
    </div>
  )
}
export default Login;