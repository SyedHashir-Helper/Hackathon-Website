import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import s1 from "./images/Sponsors/1.jpg"
import s2 from "./images/Sponsors/2.jpg"
import s3 from "./images/Sponsors/3.jpg"
import s4 from "./images/Sponsors/4.jpg"
import s5 from "./images/Sponsors/5.jpg"
import s6 from "./images/Sponsors/6.png"
import s7 from "./images/Sponsors/7.jpg"
import s8 from "./images/Sponsors/8.png"
import s9 from "./images/Sponsors/9.jpeg"
import { BrowserRouter, Routes, Route } from "react-router-dom";  

import HomePage from './pages/HomePage/HomePage'
import SignUp from './pages/SingUp/SignUp'
import Login from './pages/Login/Login'
import SignUpForm from './pages/SingUp/Components/SignUpForm'
import Register from './pages/Register/Register'

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/"  element={<HomePage/>}/>
          <Route path="/login"  element={<SignUp><Login/></SignUp>}/>
          <Route path="/signup"  element={<SignUp><SignUpForm/></SignUp>}/>
          <Route path="/register"  element={<SignUp><Register/></SignUp>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
