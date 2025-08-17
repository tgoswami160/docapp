import React from "react";
import assets from "../assets/assets";

const Header = () => {
  return (
    <div className="flex lg:flex-row flex-col bg-blue-400 rounded-3xl mx-20 my-5 lg:h-130 h-auto">
      <div className="flex flex-col  justify-center gap-4 m-5 py-20 px-10 w-full ">
        <h2 className="text-5xl text-white font-bold ">Book Appointment</h2>
        <h2 className="text-5xl text-white font-bold ">With Trusted Doctors</h2>
        <div className="flex justify-center align-middle my-5">
          <img src={assets.logo} alt="image 1" className="w-40 h-20" />
          <div className=" text-white mx-2 my-3">
            <p >
              Simply browse through our extensive list of trusted doctors,
              <br />
              schdule your appointment hassle-free
            </p>
          </div>
        </div>
        <button className="bg-white p-3 text-gray-500 rounded-full cursor-pointer w-50 ">
          Book appointment &rarr;
        </button>
      </div>
      <div className="w-full">
        <img src={assets.logo} alt="image2" className="w-200 lg:h-130 h-auto p-2" />
      </div>
    </div>
  );
};

export default Header;
