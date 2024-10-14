import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';



const Demo = () => {
  const navigate= useNavigate();
  const [logout, setLogout]=useState(false);
  useEffect(()=>{
    // if(!localStorage.getItem('auth'))navigate('/Demo')
   if(!localStorage.getItem('auth')) navigate('/')
  },[logout])

    const logoutHandler =e =>{
      e.preventDefault();
      localStorage.removeItem('auth')
      setLogout(true)

    }
  return (
<>
<h1>hello</h1>
<p><button onClick={logoutHandler}>logout</button></p>
</>
  )
}

export default Demo


