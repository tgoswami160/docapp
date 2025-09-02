import React from 'react'
import { specialityData} from "../assets/assets.js"
import { Link } from "react-router-dom"

const Speciality = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-20 gap-6' id='speciality'>
      <h1 className='text-3xl font-medium'>Find by Speciality</h1>
      <p className='w-90 text-center text-gray-500 text-sm'>Simply browse through our extensive list of trusted doctors,schedule your appointment hassle-free.</p>
      <div className='flex gap-8 sm:justify-center pt-5 w-full overflow-scroll'>
        {
            specialityData.map((speciality,index) => (
                <Link onClick={()=> scrollTo(0,0)} className='flex flex-col flex-shrink-0 text-xs hover:translate-y-[-10px] transition-all duration-500 cursor-pointer' key={index} to={`/doctors/${speciality.speciality}`}>
                <img className='w-16 sm:w-24 mb-2' src={speciality.image} alt="" />
                <p className='text-sm text-center'>{speciality.speciality}</p>
                </Link>
            ))
        }
      </div>
    </div>
  )
}

export default Speciality
