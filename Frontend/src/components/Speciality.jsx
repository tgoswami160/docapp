import React from 'react'
import assets from '../assets/assets'

const Speciality = () => {
  return (
    <div className='mx-20 mt-10 p-2 mb-5'>
      <h3 className='text-center text-4xl font-bold'>Find by Speciality</h3>
      <p className='text-center my-5'>Simply browse through our extensive list of trusted doctors,
        <br/>schedule your appointment hassle-free.</p>
      <div className='flex flex-wrap justify-center gap-10 my-10'>
        <div className='flex flex-col justify-center items-center'>
            <img src={assets.logo} alt="photo" className=' h-28 w-28 border rounded-full mb-1'/>
            <p className='sm:text-sm lg:text-base'>General Physician</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <img src={assets.logo} alt="photo" className=' h-28 w-28 border rounded-full mb-1'/>
            <p className='sm:text-sm lg:text-base '>Gynecologist</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <img src={assets.logo} alt="photo" className=' h-28 w-28 border rounded-full mb-1'/>
            <p className='sm:text-sm lg:text-base'>Dermatologist</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <img src={assets.logo} alt="photo" className=' h-28 w-28 border rounded-full mb-1'/>
            <p className='sm:text-sm lg:text-base'>Pediatricians</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <img src={assets.logo} alt="photo" className=' h-28 w-28 border rounded-full mb-1'/>
            <p className='sm:text-sm lg:text-base'>Neurologist</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <img src={assets.logo} alt="photo" className=' h-28 w-28 border rounded-full mb-1'/>
            <p className='sm:text-sm lg:text-base'>Gastroenterologist</p>
        </div>
        
      </div>
      
    </div>
  )
}

export default Speciality
