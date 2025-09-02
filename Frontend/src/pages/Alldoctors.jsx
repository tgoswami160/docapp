import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from '../../context/AppContext';



const Alldoctors = () => {
  const {speciality} = useParams()
  const [filterDoc,setFilterDoc] = useState([])
  const {doctors} = useContext(AuthContext)
  const navigate = useNavigate();

  const applyFilter = () => {
    if(speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    }else{
      setFilterDoc(doctors)
    }
  }

  useEffect(()=> {
    applyFilter()
  },[speciality,doctors])

  return (
    <div>
      <p className='my-5 text-gray-600 text-sm mx-5'>Browse through the doctors specialist.</p>
     <div className='flex gap-6 flex-col md:flex-row'>
      <div className='text-gray-600 flex flex-col gap-3 w-full md:w-1/4 text-sm mx-5'>
        <p className={`hover:bg-blue-400 hover:text-white border border-gray-400 p-1 rounded cursor-pointer ${speciality === 'General physician' ? "bg-indigo-100 text-black" : ""}`} onClick={() => speciality === 'General physician' ? navigate("/doctors") : navigate("/doctors/General physician")}>General physician</p>
        <p className={`hover:bg-blue-400 hover:text-white border border-gray-400 p-1 rounded cursor-pointer ${speciality === 'Gynecologist' ? "bg-indigo-100 text-black" : ""}`} onClick={() => speciality === 'Gynecologist' ? navigate("/doctors") : navigate("/doctors/Gynecologist")}>Gynecologist</p>
        <p className={`hover:bg-blue-400 hover:text-white border border-gray-400 p-1 rounded cursor-pointer ${speciality === 'Dermatologist' ? "bg-indigo-100 text-black" : ""}`} onClick={() => speciality === 'Dermatologist' ? navigate("/doctors") : navigate("/doctors/Dermatologist")}>Dermatologist</p>
        <p className={`hover:bg-blue-400 hover:text-white border border-gray-400 p-1 rounded cursor-pointer ${speciality === 'Pediatricians' ? "bg-indigo-100 text-black" : ""}`} onClick={() => speciality === 'Pediatricians' ? navigate("/doctors") : navigate("/doctors/Pediatricians")}>Pediatricians</p>
        <p className={`hover:bg-blue-400 hover:text-white border border-gray-400 p-1 rounded cursor-pointer ${speciality === 'Neurologist' ? "bg-indigo-100 text-black" : ""}`} onClick={() => speciality === 'Neurologist' ? navigate("/doctors") : navigate("/doctors/Neurologist")}>Neurologist</p>
        <p className={`hover:bg-blue-400 hover:text-white border border-gray-400 p-1 rounded cursor-pointer ${speciality === 'Gastroenterologist' ? "bg-indigo-100 text-black" : ""}`} onClick={() => speciality === 'Gastroenterologist' ? navigate("/doctors") : navigate("/doctors/Gastroenterologist")}>Gastroenterologist</p>
      </div>
      <div className='w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-col-2 gap-4 gap-y-6 px-3 sm:px-0 mr-10'>
        {
          filterDoc.map((item,index) => (
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
              </div>
    </div>
  )
}

export default Alldoctors
