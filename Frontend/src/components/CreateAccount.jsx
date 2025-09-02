import React from 'react'
import { useState } from 'react'
import axios from 'axios'


const CreateAccount = () => {
 
  const [fullName,setFullName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/users/create-account",{fullName,email,password},{
          headers: {
            'Content-Type': 'application/json'
          }
        })
      
      alert("created account succesfully!")
    } 
    catch (error) {
      alert(error.response?.data?.message||"Creation failed")
    }
  }

  return (
    <div className=' flex justify-center bg-gradient-to-r from-blue-100 via-white to-blue-50'>
      <div className='flex flex-col w-100 h-110 mt-25 mb-25 p-5 gap-2 rounded-4xl shadow-2xl bg-white'>
        <div>
        <h2 className='text-2xl text-center'>Create Account</h2>
        <p className='text-sm text-center mb-4'>Please sign up to book appointment</p>
        </div>
        <label htmlFor="fullName">Full Name</label>
        <input type="text" id="fullName" placeholder='Enter your fullname' value={fullName} onChange={(e)=> setFullName(e.target.value)} className='border-2 rounded-md border-gray-300 p-1'/>
        <label htmlFor="email">Email</label>
        <input type="text" id="Email" placeholder='abc@gmail.com' value={email} onChange={(e)=> setEmail(e.target.value)} className='border-2 rounded-md border-gray-300 p-1'/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder='Enter your password'  value={password} onChange={(e)=> setPassword(e.target.value)} className='border-2 rounded-md border-gray-300 p-1'/>

        <button onClick={handleCreateAccount} className='bg-blue-400 text-white p-2 rounded-2xl mt-3 '>Create Account</button>
        <p className='text-sm text-center'>Already have an account? <a href="/login" className='text-blue-800 underline mb-5'>Login here</a></p>
      </div>
    </div>
  )
}

export default CreateAccount
