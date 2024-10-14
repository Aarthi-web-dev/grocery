//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import { emailValidator,passwordValidator } from './components/Regex';
// import {} from 'react-router-dom';
// import {useHistory} from "react-router-dom;"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function App() {
   const navigate= useNavigate();
    const[input,setInput] = useState({email:'', password:''});
    const[errorMessage,seterrorMessage]=useState('')

    useEffect(()=>{
      if(localStorage.getItem('auth'))navigate('/Demo')
      },[])

    const handleChange=(e) =>{
        setInput({...input,[e.target.name]:e.target.value})
    }

    const formSubmitter = (e) =>{
      e.preventDefault()
      if(!emailValidator(input.email)) return seterrorMessage('please enter valid email id') 
        if(!passwordValidator(input.password)) return seterrorMessage('password should have min 8 charcter') 
          if (input.email !=="aarthidev24@gmail.com" || input.password !== "Password-@0") return seterrorMessage('incorrect email or password')
            navigate('/Demo')
      localStorage.setItem('auth',true)


    }

  return (
    <div className='login-container'>
      <h3 className="form-title">Login</h3>
{errorMessage.length > 0 && (
  <div style={{marginBottom:"2px", color:"red"}}
  >{errorMessage}
  </div>
)}      

      
      <form className="login-form" action="#" onSubmit={formSubmitter}>

        <div className="input-wrapper">
        <input type="email" name="email" placeholder="Email address" className="input-field" onChange={handleChange}/>
        {/* <span className="material-symbols-outlined">mail</span> */}
        </div>

        <div className="input-wrapper">
        <input type="password"  name="password" placeholder="password" className="input-field"  onChange={handleChange}/>
        {/* <span class="material-symbols-outlined">lock</span> */}
      
        </div>
        {/* <a href="#" className="forgot-pass-link">ForgotPassword?</a> */}
        <button className="login-button">LOGIN </button>

      </form>
      <p className="signin-text">Don't have an account?   <a href="#">Signin</a></p>
      <p className="separation"><span>or</span></p>

      <div className="social-login">
        <button className="social-button"> Continue with google
          <img src="./googleicon.png" alt="google" className="social-icon"/>
        </button>

        <button className="social-button"> Continue with phone
        <img src="./phoneicon.png" alt="phone" className="social-icon"/>
        </button>
      </div>
      <emailValidator/>
      <passwordValidator/>
    </div>
  );
}

export default App;
