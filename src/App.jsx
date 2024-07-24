import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Counter from './Components/Counter'
import CounterSec from './Components/CounterSec'
import ImgText from './Components/ImgText'
import SideBySide from './Components/SideBySide'
import Sponsors from './Components/Sponsors'


import s1 from "./images/Sponsors/1.jpg"
import s2 from "./images/Sponsors/2.jpg"
import s3 from "./images/Sponsors/3.jpg"
import s4 from "./images/Sponsors/4.jpg"
import s5 from "./images/Sponsors/5.jpg"
import s6 from "./images/Sponsors/6.png"
import s7 from "./images/Sponsors/7.jpg"
import s8 from "./images/Sponsors/8.png"
import s9 from "./images/Sponsors/9.jpeg"
import Contact from './Components/Contact'
import Subscription from './Components/Subscription'
import Footer from './Components/Footer'
import Schedule from './Components/Schedule'

function App() {

  const schedule = [
    {
      "name": "Day 01",
      headers: ["Event", "Date", "Time"],
      icons: ["celebration", "calendar_month","schedule"],
      data: [
        [ "1","2","3" ],
        [ "1","2","3" ],
        [ "1","2","3" ],
      ]
    },

    {
      "name": "Day 02",
      headers: ["Event", "Date", "Time"],
      icons: ["celebration", "calendar_month","schedule"],
      data: [
        [ "4","5","6" ],
        [ "4","5","6" ],
        [ "4","5","6" ],
      ]
    },
    {
      "name": "Day 03",
      headers: ["Event", "Date", "Time"],
      icons: ["celebration", "calendar_month","schedule"],
      data: [
        [ "7","8","9" ],
        [ "7","8","9" ],
        [ "7","8","9" ],
      ]
    }
  ]
  
  const sponsors = [
    s1,s2,s3,s4,s5,s6,s7,s8,s9
]

const partners = [
  s1,s2,s3,s4,s5,s6,s7,s8,s9
]


  return (
    <>
      <Navbar/>
      <Hero/>
      <CounterSec/>
      <SideBySide/>

      <Schedule timetable={schedule}/>
      <Sponsors 
        title={"Sponsors"}
        sponsors={sponsors}

      />
      <Sponsors 
        title={"Partners"}
        sponsors={partners}
      />
      <Contact/>
      <Subscription/>
      <Footer/>
    </>
  )
}

export default App
