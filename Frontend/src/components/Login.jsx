import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const handleLogin=async(e)=>{
    e.preventDefault();
    try {
      const res=await axios.post("http://localhost:3000/api/users/login",{email,password})
      localStorage.setItem("token",res.data.token);
      alert("login succesfully!")
    } 
    catch (error) {
      alert(error.response?.data?.message||"login failed")
    }
  }
  return (
    <div className=' flex justify-center'>
      <div className='flex flex-col w-80 h-90 border mt-10 mb-10 p-5 gap-2 rounded-4xl '>
        <div>
        <h2 className='text-2xl text-center'>Login</h2>
        <p className='text-sm text-center mb-4'>Please login to book appointment</p>
        </div>
        
        <label htmlFor="fullname">Email</label>
      <input onChange={(e)=>setEmail(e.target.value)} type="text" value={email} id="email" placeholder='abc@gmail.com' className='border-2 rounded border-gray-300 p-1'/>
        <label htmlFor="password">Password</label>
        <input onChange={(e)=>setPassword(e.target.value)} type="password" value={password} id="password" placeholder='Enter your password' className='border-2 rounded border-gray-300 p-1'/>

        <button onClick={handleLogin} className='bg-blue-400 text-white p-2 rounded-2xl mt-3 '>Login</button>
        <p className='text-sm text-center'>New to Medicore? <a href="#" className='text-blue-800 underline mb-5'>Create account</a></p>
      </div>
    </div>
  )
}

export default Login
