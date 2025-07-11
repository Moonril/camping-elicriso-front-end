import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import './index.css'
import HomePage from './components/HomePage'
import MyNavBar from './components/MyNavBar'
import LogIn from './components/LogIn'
import Accomodation from './components/Accomodation'
import MyBookings from './components/MyBookings'
import Restaurant from './components/Restaurant'
import PageNotFound from './components/PageNotFound'

function App() {

  return (
    <>
      <div className='min-h-screen'>
        {/* header fuori dalle routes */}
        
        <MyNavBar />
        
        <Routes>
          <Route path='/' element={<HomePage />} /> {/* main */}
          <Route path='/login' element={<LogIn />} /> 
          <Route path='/accomodation' element={<Accomodation />} />
          <Route path='/restaurant' element={<Restaurant />} />
          {/* <Route path='/bookings' element={<MyBookings />} /> */}
          <Route path='/myBookings' element={<MyBookings />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
