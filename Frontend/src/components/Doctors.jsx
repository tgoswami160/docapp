import React from "react";
import assets from "../assets/assets";

const Doctors = () => {
  return (
    <div className="flex flex-col items-center mx-30 w-auto ">
      <h2 className="text-4xl font-bold my-8">Top Doctor to Book</h2>
      <p className="w-full text-center">
        Simply browse through our
        <br /> extensive list of trusted doctors.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 my-10">
        <div className="border border-gray-600 rounded-2xl">
          <img src={assets.logo} alt="" className="w-60 h-70 rounded-2xl" />
          <div className="flex flex-col m-1 p-2 items-center">
            <p className="text-emerald-600">&bull; Avaliable</p>
            <h3>Doctor Name</h3>
            <p>Specialization</p>
          </div>
        </div>
        <div className="border border-gray-600 rounded-2xl">
          <img src={assets.logo} alt="" className="w-60 h-70 rounded-2xl" />
          <div className="flex flex-col m-1 p-2 items-center">
            <p className="text-emerald-600">&bull; Avaliable</p>
            <h3>Doctor Name</h3>
            <p>Specialization</p>
          </div>
        </div>

        <div className="border border-gray-600 rounded-2xl">
          <img src={assets.logo} alt="" className="w-60 h-70 rounded-2xl" />
          <div className="flex flex-col m-1 p-2 items-center">
            <p className="text-emerald-600">&bull; Avaliable</p>
            <h3>Doctor Name</h3>
            <p>Specialization</p>
          </div>
        </div>

        <div className="border border-gray-600 rounded-2xl">
          <img src={assets.logo} alt="" className="w-60 h-70 rounded-2xl" />
          <div className="flex flex-col m-1 p-2 items-center">
            <p className="text-emerald-600">&bull; Avaliable</p>
            <h3>Doctor Name</h3>
            <p>Specialization</p>
          </div>
        </div>

        <div className="border border-gray-600 rounded-2xl">
          <img src={assets.logo} alt="" className="w-60 h-70 rounded-2xl" />
          <div className="flex flex-col m-1 p-2 items-center">
            <p className="text-emerald-600">&bull; Avaliable</p>
            <h3>Doctor Name</h3>
            <p>Specialization</p>
          </div>
        </div>
        
        <div className="border border-gray-600 rounded-2xl">
          <img src={assets.logo} alt="" className="w-60 h-70 rounded-2xl" />
          <div className="flex flex-col m-1 p-2 items-center">
            <p className="text-emerald-600">&bull; Avaliable</p>
            <h3>Doctor Name</h3>
            <p>Specialization</p>
          </div>
        </div>
        

         <div className="border border-gray-600 rounded-2xl">
          <img src={assets.logo} alt="" className="w-60 h-70 rounded-2xl" />
          <div className="flex flex-col m-1 p-2 items-center">
            <p className="text-emerald-600">&bull; Avaliable</p>
            <h3>Doctor Name</h3>
            <p>Specialization</p>
          </div>
        </div>

         <div className="border border-gray-600 rounded-2xl">
          <img src={assets.logo} alt="" className="w-60 h-70 rounded-2xl" />
          <div className="flex flex-col m-1 p-2 items-center">
            <p className="text-emerald-600">&bull; Avaliable</p>
            <h3>Doctor Name</h3>
            <p>Specialization</p>
          </div>
        </div>

         <div className="border border-gray-600 rounded-2xl">
          <img src={assets.logo} alt="" className="w-60 h-70 rounded-2xl" />
          <div className="flex flex-col m-1 p-2 items-center">
            <p className="text-emerald-600">&bull; Avaliable</p>
            <h3>Doctor Name</h3>
            <p>Specialization</p>
          </div>
        </div>

         <div className="border border-gray-600 rounded-2xl">
          <img src={assets.logo} alt="" className="w-60 h-70 rounded-2xl" />
          <div className="flex flex-col m-1 p-2 items-center">
            <p className="text-emerald-600">&bull; Avaliable</p>
            <h3>Doctor Name</h3>
            <p>Specialization</p> 
          </div>
        </div>
        
      </div>

    <button className="border bg-blue-400 m-2 px-6 py-2 rounded-3xl text-white cursor-pointer mb-5">more</button>
    </div>
  );
};

export default Doctors;
