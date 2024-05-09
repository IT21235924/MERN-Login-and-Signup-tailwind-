import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import Homepage from './pages/apod'
import Loginpage from './pages/login'
import SignupPage from './pages/signup'

function App() {

  return (
    <>
      <Routes>
        <Route path='/apod' element={<Homepage/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
      </Routes>

    </>
  )
}

export default App
