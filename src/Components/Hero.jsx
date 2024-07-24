import React from 'react'
import logo from  "../assets/velo.png"
import "../styles/Hero.css"
import heroimg from "../images/heroimg.png"
const Hero = () => {
  return (
    <section id='hero' className='hero--section'>
        <div className='hero-img'>
          <img src={heroimg}/>
        </div>
        <div className='hero-maintext'>
            VeloStrike Marathon
        </div>
        <div className='hero-textimg'>
            <div>Powered by</div>
                <img width={100} src={logo}/>
        </div>
        <div className='hero-undertext'>
            Hacking the Future, One Line at a Time
        </div>
    </section>
  )
}

export default Hero
