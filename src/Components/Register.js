import React from 'react'
import "../CSS/Register.css"
const Register = () => {
  return (
    <div className='register-background'>
    <div className='register'>
        <div className='register-title'>Register</div>
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
        <div className='input-fields'>
        <label for="re-password">Re-Enter Password :</label>
        <br/>
        <input id="re-password" type="password"/>
        </div>
        <div className='register-btn'>
        <button type="button" class="btn btn-light">Register</button>
        </div>
     </form>
     <div className='login-reg'>Already have an account? <a href="#">Login</a></div>
    </div>
    </div>
  )
}

export default Register