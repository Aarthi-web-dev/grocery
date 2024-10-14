import React, { useState } from 'react';

const InputField = () => {
    const[input,setInput]=useState({email:"", password:""});

    const handleChange=(e) =>{
        setInput({...input,[e.target.name]:e.target.value})
    }

   
return (<>
    <div className="input-wrapper">
        <input type="email" name="email" placeholder="Email address" className="input-field" required onChange={handleChange}/>
        {/* <span className="material-symbols-outlined">mail</span> */}
        </div>

        <div className="input-wrapper">
        <input type="password" name="password" placeholder="password" className="input-field" required onChange={handleChange}/>
        {/* <span class="material-symbols-outlined">lock</span> */}
      
        </div>
        </>
  )
}

export default InputField
