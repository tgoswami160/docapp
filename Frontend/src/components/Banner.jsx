import React from "react";
import assets from "../assets/assets";

const Banner = () => {
  return (
    <div className="flex lg:flex-row flex-col bg-blue-400 rounded-3xl mx-30 my-10 lg:h-80 h-auto gap-4">
      <div className="flex flex-col justify-center mt-5 w-full gap-3">
        <h4 className="text-4xl mx-10  text-white font-bold">
          Book Appointment
        </h4>
        <p className="text-4xl mx-10 text-white font-bold">
          With 100+ Trusted Doctors
        </p>
        <button className="bg-white rounded-3xl  mx-10 my-6 w-50 p-2">
          Create account
        </button>
      </div>

      <div className="w-full ">
        <img src={assets.logo} alt="image" className="w-full h-full rounded-3xl p-1" />
      </div>

    </div>
  );
};

export default Banner;
