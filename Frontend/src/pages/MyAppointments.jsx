import React, { useEffect, useState } from "react";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/appointments"); 
        const data = await response.json();
        setAppointments(data);   // backend se jo data aayega usse state update karo
      } catch (error) {
        console.error("Error fetching appointments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-50 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">My Appointments</h2>

        
        {loading && <p className="text-center text-gray-500">Loading appointments...</p>}

        
        {!loading && appointments.length === 0 && (
          <p className="text-gray-500 text-center py-10">No appointments found ❌</p>
        )}

        
        <div className="space-y-4">
          {appointments.map((appt) => (
            <div
              key={appt._id}
              className="border rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-800">{appt.doctorName}</h3>
              <p className="text-sm text-gray-500">{appt.specialization}</p>
              <p className="text-sm text-gray-600 mt-2">📅 {appt.date} | ⏰ {appt.time}</p>
              <p className="text-sm text-gray-600">🏥 {appt.hospital}</p>

              <div className="flex gap-3 mt-4">
                <button className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600">
                  Reschedule
                </button>
                <button className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600">
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;
