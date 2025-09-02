import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AppContext';


const TopDoctors = () => {
    const navigate = useNavigate();
    const {doctors} = useContext(AuthContext)
  return (
    <div className='flex flex-col items-center mt-20 gap-6 lg:mx-30 mx-20'>
       <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
       <p className='w-88 text-center text-gray-500 text-sm'>Simply browse through extensive list of trusted doctors</p>
       <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-5 gap-y-6 px-3 sm:px-0 '> 
        {
            doctors.slice(0,10).map((item,index) => (
                <div onClick={()=> navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                    <img className='bg-blue-50' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-green-500'>
                            <p className='size-2 rounded-full bg-green-500'></p><p>Availble</p>
                        </div>
                        <p className='font-medium text-gray-900'>{item.name}</p>
                        <p className='text-sm text-gray-500'>{item.speciality}</p>
                    </div>
                </div>
            ))
        }
       </div>
       <button onClick={() =>{ navigate("/all-doctors");scrollTo(0,0)}} className='bg-primary text-white text-sm font-medium px-12 py-3 rounded-full mt-10 bg-blue-500'>More</button>
    </div>
  )
}

export default TopDoctors
