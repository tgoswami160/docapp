import React, { useContext, useEffect } from "react";
import assets from "../assets/assets";
import { AuthContext } from "../../context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react"


const Header = () => {
  const navigate=useNavigate();

  const handleAppointment=()=>{
    useEffect(navigate('/all-doctors'))
  }
  return (
    <div className="flex lg:flex-row flex-col bg-blue-500 rounded-3xl lg:mx-30 mx-20 my-5 lg:h-130 h-auto">
      <div className="flex flex-col  justify-center gap-4 m-5 lg:py-20 py-10 px-10 w-full ">
        <h2 className="text-5xl text-white font-bold ">Book Appointment</h2>
        <h2 className="text-5xl text-white font-bold ">With Trusted Doctors</h2>
        <div className="flex justify-center align-middle my-5">
          
          <img src={assets.groupProfiles} alt="group image" className="w-35 h-15" />
          

          <div className=" text-white mx-2 my-3">
            <p >
              Simply browse through our extensive list of trusted doctors,

              schdule your appointment hassle-free
            </p>
          </div>
        </div>
        <motion.button whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}  onClick={
        handleAppointment } className="bg-white p-3 text-gray-500 rounded-full cursor-pointer w-50  shadow-xl transition">
          Book appointment &rarr;
        </motion.button>
      </div>
      <div className="w-full">
        <img src={assets.headerImg} alt="Doctor-image" className="w-200 lg:h-130 h-80 " />
      </div>
    </div>
  );
};

export default Header;
