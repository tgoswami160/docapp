import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Alldoctors from './pages/Alldoctors'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Login from './components/Login'
import CreateAccount from './components/CreateAccount'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appointment from './pages/Appointment'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'



function App() {
 

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/all-doctors' element={<Alldoctors/>}></Route>
        <Route path='/about-us' element={<AboutUs/>}></Route>
        <Route path='/contact-us' element={<ContactUs/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/create-account' element={<CreateAccount/>}></Route>
        <Route path='/my-appointments' element={<MyAppointments/>}></Route>
        <Route path='/appointments' element={<Appointment/>}></Route>
        <Route path='/my-profile' element={<MyProfile/>}></Route>
        <Route path="/doctors/:speciality" element={<Alldoctors />}></Route>
        <Route path="/appointments/:docId" element={<Appointment/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    
    </>
  )
}

export default App
