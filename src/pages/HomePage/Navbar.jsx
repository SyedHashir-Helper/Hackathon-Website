import React,{useEffect} from 'react'
import "../../styles/Navabar.css"
import logo from  "../../assets/velo.png"
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

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
      li:'Login',
      link: "/login"
    }, 
    {
      li:'Register',
      link: "/signup"
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
              return <Link to={element.link}><li key={index}>{element.li}</li></Link>
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar
