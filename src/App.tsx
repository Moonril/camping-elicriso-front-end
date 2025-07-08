import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import HomePage from './components/HomePage'
import MyNavBar from './components/MyNavBar'
import LogIn from './components/LogIn'

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
          <Route path='/login' element={<LogIn />} /> {/* main */}
          <Route path='*' element={<div>404 - NOT FOUND</div> } /> {/* main */}
        </Routes>
      </div>
    </>
  )
}

export default App
