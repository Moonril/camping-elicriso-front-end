import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import HomePage from './components/HomePage'
import MyNavBar from './components/MyNavBar'
import LogIn from './components/LogIn'
import Accomodation from './components/Accomodation'
import MyBookings from './components/MyBookings'

function App() {

  return (
    <>
      <div className='min-h-screen'>
        {/* header fuori dalle routes */}
        <header className='bg-teal-700 text-white sticky top-0 z-10'>
            <MyNavBar />
        </header>
        <Routes>
          <Route path='/' element={<HomePage />} /> {/* main */}
          <Route path='/login' element={<LogIn />} /> 
          <Route path='/accomodation' element={<Accomodation />} />
          <Route path='/bookings' element={<MyBookings />} />
          <Route path='*' element={<div>404 - NOT FOUND</div> } />
        </Routes>
      </div>
    </>
  )
}

export default App
