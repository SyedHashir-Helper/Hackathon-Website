import { Row } from 'antd'
import React from 'react'
import Header from '../../Components/Header'
import SignUpForm from './Components/SignUpForm.jsx'
import Footer from "../../Components/Footer.jsx"
import Login from '../Login/Login.jsx'

const SignUp = ({children}) => {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",

    }}>
        <Header/>
        {/* <SignUpForm/> */}
        {children}
    </div>
  )
}

export default SignUp
