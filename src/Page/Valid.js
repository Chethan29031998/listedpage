import React from 'react'
import { useState } from 'react'


const Valid = () => {
  const [state,setState]=useState({
    username:"",
    password:""

})

const [errors,setErrors]=useState({})



    const input={
        display:"inline-block",
        width:"350px"

    }

    const button={
        display:"inline-block",
        width:"250px",
        backgroundColor:"brown"
    }







    const handleChange=(event)=>{
      setState({...state,[event.target.name]:event.target.value});

  }

    const handleClick=()=>{
      setErrors({})

      
      if (state.username.length===0){
          
          setErrors({...errors,"username":"Username is Required"})
      }

      
       if (state.password.length===0){
          setErrors({...errors,"password":"Password is Required"})

          
      }
      else if (state.password.length>0){
         if (state.password.length<5 && state.password.length>15 )

          setErrors({...errors,"password":"Password should be between 5 and 15 characters"})

          
      }
    }


  return (
    <div>
      <h1>Validation</h1>


<input style={input}  type={"text"} name="username" onChange={handleChange}/> <br></br><br></br>
{errors.username?<label style={{color:"red"}}>{errors.username}</label> :""} <br></br><br></br>


<input style={input}  type={"text"}  name="password" onChange={handleChange}/><br></br><br></br>
{errors.password?<label style={{color:"red"}}>{errors.password}</label> :""} <br></br><br></br>



<button style={button} onClick={handleClick}>
    Login
</button>

    </div>
  )
}

export default Valid