import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import './index.css'
import HomePage from './components/HomePage'
import MyNavBar from './components/MyNavBar'
import LogIn from './components/LogIn'
import Accomodation from './components/Accommodation'
import MyBookings from './components/MyBookings'
import Restaurant from './components/Restaurant'
import PageNotFound from './components/PageNotFound'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'
import Booking from './components/Booking'
import Backoffice from './components/backoffice/Backoffice'
import { AuthProvider } from './context/AuthContext'
import HandleBookings from './components/backoffice/BookingsNavbar'
import BookingsTest from './components/backoffice/BookingsTest'

function App() {

  return (
    <AuthProvider>
      <div className='min-h-screen'>
        {/* header fuori dalle routes */}
        
        <MyNavBar />
        
        <Routes>
          <Route path='/' element={<HomePage />} /> {/* main */}
          <Route path='/login' element={<LogIn />} /> 
          <Route path='/accommodations' element={<Accomodation />} />
          <Route path='/restaurant' element={<Restaurant />} />
          <Route path='/bookingstest' element={<BookingsTest />} />
          <Route path='/bookings' element={<Booking />} />
          <Route path='/bookings/:type' element={<Booking />} />
          <Route path='/myBookings' element={<MyBookings />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/contact/:bookingId' element={<ContactUs />} />
          <Route path='/backoffice' element={<Backoffice />} />
          <Route path='/handle-bookings' element={<HandleBookings />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  )
}

export default App
