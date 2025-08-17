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
      </Routes>
      <Footer/>
    </Router>
    
    </>
  )
}

export default App
