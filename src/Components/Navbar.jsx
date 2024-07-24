import React from 'react'
import "../styles/Navabar.css"
import logo from  "../assets/velo.png"

const Navbar = () => {
  const items = [
    {
      li:'Home',
      link: "#hero"
    }, 
    {
      li:'Schedule',
      link: "#schedule"
    }, 
    {
      li:'Sponsors',
      link: "#Sponsors"
    }, 
    {
      li:'Partners',
      link: "#Partners"
    }, 
    {
      li:'Contact',
      link: "#contact"
    }, 
    {
      li:'Register',
      link: "#register"
    }, 
  ]
  return (
    <div className='navbar'>
      <div className='nav--logo'>
        <img width={200} src={logo}/>
      </div>
      <div className='nav--items'>
        <ul className=''>
          {
            items.map((element,index)=>{
              return <a href={element.link}><li key={index}>{element.li}</li></a>
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar
