import React,{ useState } from 'react'
import './styles/Signup.css'
import axios from 'axios'
function Signup() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const signuphandler = async(e)=>
    {
        e.preventDefault()
        try
        {
            await axios.post('http://localhost:5000/signup',{username,password});
            alert('user signup successfully')
            setUsername('')
            setPassword('')
        }
        catch(err)
        {
            console.error(err)
        }
    }
  return (
    <div>
        <div className='container'>
          <form onSubmit={signuphandler} className='form'>
              <label className='text1'>Username:</label>
              <input type='text' value={username} onChange={(e)=>{setUsername(e.target.value)}} className='input'/><br/>
              <label className='text1'>Password:</label>
              <input type='text' value={password} onChange={(e)=>{setPassword(e.target.value)}} className='input'/><br/>
              <input type='submit' className='signup1'/>
          </form>
        </div>
    </div>
  )
}

export default Signup