import React from "react";
import assets from "../assets/assets";

const MyProfile = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-blue-100 via-white to-blue-50 p-10">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl overflow-hidden">
        
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-32 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-10">
            <img
              src={assets.profilePhoto}
              alt="profile"
              className="h-32 w-32 rounded-full border-4 border-white shadow-md object-cover"
            />
          </div>
        </div>

        
        <div className="mt-15 text-center px-6">
          <h2 className="text-2xl font-bold text-gray-800">{}</h2>
          
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 py-6">
          
          <div className="bg-blue-50 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-blue-700 mb-3 border-b pb-2">
              Contact Information
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-medium text-gray-800">Email:</span> user@email.com
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-medium text-gray-800">Phone:</span> +91 9876543210
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium text-gray-800">Address:</span> Lucknow, India
            </p>
          </div>

          
          <div className="bg-blue-50 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-blue-700 mb-3 border-b pb-2">
              Basic Information
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-medium text-gray-800">Gender:</span> Female
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium text-gray-800">Birthday:</span> 10 Oct 2003
            </p>
          </div>
        </div>

 
        <div className="flex justify-center gap-4 pb-6">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600 transition">
            Edit Profile
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
