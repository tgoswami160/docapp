import React from "react";
import assets from "../assets/assets";
import { useNavigate } from 'react-router-dom'
import { motion } from "motion/react"

const Banner = () => {
  const navigate = useNavigate();
 
  return (
    <div className="flex lg:flex-row flex-col bg-blue-500 rounded-3xl lg:mx-30 mx-20 my-10 lg:h-80 h-auto gap-4">
      <div className="flex flex-col justify-center mt-5 w-full gap-3">
        <h4 className="text-4xl mx-10  text-white font-bold">
          Book Appointment
        </h4>
        <p className="text-4xl mx-10 text-white font-bold">
          With 100+ Trusted Doctors
        </p>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }} 
          onClick={() => { navigate("/create-account"); scrollTo(0,0) }} 
          className="bg-white rounded-3xl  mx-10 my-6 w-50 p-2 text-gray-500 "
        >
          Create account
        </motion.button>
      </div>

      
      <div className="lg:w-full hidden lg:flex justify-center items-center">
        <img 
          src={assets.bannerImg} 
          alt="image" 
          className="w-80 lg:h-80 h-40 rounded-3xl pt-1" 
        />
      </div>
    </div>
  );
};

export default Banner;
